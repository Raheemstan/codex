import payload from 'payload';

const seed = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || 'seed-secret',
    local: true,
  });

  const adminEmail = 'admin@medconsult.dev';
  const adminPassword = 'ChangeMe123!';

  const existingAdmin = await payload.find({
    collection: 'users',
    where: {
      email: {
        equals: adminEmail,
      },
    },
  });

  if (!existingAdmin.docs.length) {
    await payload.create({
      collection: 'users',
      data: {
        email: adminEmail,
        password: adminPassword,
        role: 'admin',
        status: 'active',
      },
    });
  }

  const specializationNames = ['General Medicine', 'Pediatrics', 'Dermatology', 'Cardiology'];
  for (const name of specializationNames) {
    const existing = await payload.find({
      collection: 'specializations',
      where: {
        name: {
          equals: name,
        },
      },
    });

    if (!existing.docs.length) {
      await payload.create({
        collection: 'specializations',
        data: {
          name,
          description: `${name} specialists`,
          slug: name.toLowerCase().replace(/\s+/g, '-'),
        },
      });
    }
  }

  const demoConsultantEmail = 'consultant@medconsult.dev';
  const demoConsultantPassword = 'ChangeMe123!';

  const consultantUser = await payload.find({
    collection: 'users',
    where: {
      email: {
        equals: demoConsultantEmail,
      },
    },
  });

  let consultantUserId = consultantUser.docs[0]?.id;
  if (!consultantUserId) {
    const createdUser = await payload.create({
      collection: 'users',
      data: {
        email: demoConsultantEmail,
        password: demoConsultantPassword,
        role: 'consultant',
        status: 'active',
      },
    });
    consultantUserId = createdUser.id;
  }

  const consultantProfile = await payload.find({
    collection: 'consultants',
    where: {
      user: {
        equals: consultantUserId,
      },
    },
  });

  if (!consultantProfile.docs.length) {
    const specializations = await payload.find({
      collection: 'specializations',
      limit: 2,
    });

    await payload.create({
      collection: 'consultants',
      data: {
        user: consultantUserId,
        licenseNumber: 'NG-MED-123456',
        specializations: specializations.docs.map((doc) => doc.id),
        feeAmount: 15000,
        verificationStatus: 'approved',
        availabilityTimezone: 'Africa/Lagos',
      },
    });
  }

  payload.logger.info('Seed completed.');
  process.exit(0);
};

seed().catch((error) => {
  payload.logger.error(error);
  process.exit(1);
});
