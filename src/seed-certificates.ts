import path from 'path'
import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(process.cwd(), '.env.production') })
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })
dotenv.config({ path: path.resolve(process.cwd(), '.env') })

interface SeedCertDef {
  standard: string
  title: string
  subtitle: string
  registrationNumber: string
  issuingAuthority: string
  issueDate: string
  description: string
  order: number
  isActive: boolean
  isFeaturedHome: boolean
  sourceFileName: string
  targetFileName: string
  alt: string
}

const CERTIFICATES_DATA: SeedCertDef[] = [
  {
    standard: 'ISO 45001:2018',
    title: 'سیستم مدیریت ایمنی و بهداشت شغلی',
    subtitle: 'Occupational Health & Safety Management Systems',
    registrationNumber: 'QAL-258298-25-12721661',
    issuingAuthority: 'Quay Audit Limited (QAL)',
    issueDate: '2024 - 2027',
    description:
      'گواهینامه بین‌المللی استقرار سیستم مدیریت بهداشت حرفه‌ای و ایمنی کارگاهی بر اساس استانداردهای سخت‌گیرانه صنایع سنگین، به حداقل رساندن خطرات و حوادث شغلی و ارتقای فرهنگ حفاظت فردی و محیطی در فرآیندهای مهندسی و ساخت تجهیزات دوار.',
    order: 1,
    isActive: true,
    isFeaturedHome: true,
    sourceFileName: 'cert_1_extracted.jpg',
    targetFileName: 'cert-iso-45001.jpg',
    alt: 'گواهینامه ISO 45001:2018 ایمنی و بهداشت شغلی شرکت هزاره کالا دانش اروند',
  },
  {
    standard: 'IMS',
    title: 'سیستم مدیریت یکپارچه',
    subtitle: 'Integrated Management System (ISO 9001, ISO 14001, ISO 45001)',
    registrationNumber: 'QAL-258298-25-12721663',
    issuingAuthority: 'Quay Audit Limited (QAL)',
    issueDate: '2024 - 2027',
    description:
      'پیاده‌سازی یکپارچه و سیستماتیک ساختار مدیریت کیفیت، بهداشت حرفه‌ای و حفاظت محیط زیست، تضمین‌کننده همگرایی فرآیندهای زنجیره تأمین، تولید مهندسی، کنترل کیفیت و خدمات پس از فروش منطبق با موازین جامع بین‌المللی.',
    order: 2,
    isActive: true,
    isFeaturedHome: true,
    sourceFileName: 'cert_2_extracted.jpg',
    targetFileName: 'cert-ims.jpg',
    alt: 'گواهینامه IMS سیستم مدیریت یکپارچه شرکت هزاره کالا دانش اروند',
  },
  {
    standard: 'ISO 29001:2020',
    title: 'سیستم مدیریت کیفیت در صنایع نفت، پتروشیمی و گاز طبیعی',
    subtitle: 'Quality Management Systems for Petroleum, Petrochemical and Natural Gas Industries',
    registrationNumber: 'QAL-258298-25-12721662',
    issuingAuthority: 'Quay Audit Limited (QAL)',
    issueDate: '2024 - 2027',
    description:
      'استاندارد اختصاصی کیفیت در زنجیره تأمین صنایع نفت، گاز و پتروشیمی. تضمین صلاحیت عالی و تضمین کیفیت در طراحی، مهندسی معکوس، ساخت، تست عملکرد هیدرولیک و راه‌اندازی پمپ‌ها و تجهیزات فرآیندی بحرانی.',
    order: 3,
    isActive: true,
    isFeaturedHome: true,
    sourceFileName: 'cert_3_extracted.jpg',
    targetFileName: 'cert-iso-29001.jpg',
    alt: 'گواهینامه ISO 29001:2020 مدیریت کیفیت صنایع نفت و پتروشیمی شرکت هزاره کالا',
  },
  {
    standard: 'ISO 9001:2015',
    title: 'سیستم مدیریت کیفیت بین‌المللی',
    subtitle: 'Quality Management Systems',
    registrationNumber: 'QAL-283017-19-15461',
    issuingAuthority: 'Quay Audit Limited (QAL)',
    issueDate: '2019 - Renewed',
    description:
      'چارچوب استانداردهای بین‌المللی مدیریت کیفیت سازمانی، متمرکز بر رضایت‌مندی کارفرمایان، ارزیابی مستمر شاخص‌های مهندسی، انطباق تلورانس‌های ماشین‌کاری سنگین و استقرار روش‌های کنترل کیفی دقیق در تمامی مراحل تولید.',
    order: 4,
    isActive: true,
    isFeaturedHome: true,
    sourceFileName: 'cert_4.jpg',
    targetFileName: 'cert-iso-9001.jpg',
    alt: 'گواهینامه ISO 9001:2015 مدیریت کیفیت بین‌المللی شرکت هزاره کالا دانش اروند',
  },
  {
    standard: 'HSE-MS',
    title: 'سیستم مدیریت بهداشت، ایمنی و محیط زیست',
    subtitle: 'Health, Safety and Environmental Management System',
    registrationNumber: 'QAL-283016-19-15456',
    issuingAuthority: 'Quay Audit Limited (QAL)',
    issueDate: '2019 - Renewed',
    description:
      'مدل مدیریت جامع ریسک‌های بهداشت، ایمنی صنعتی و موازین زیست‌محیطی در کلیه سایت‌های عملیاتی، خطوط ماشین‌کاری و کارگاه‌های تست، تضمین‌کننده تولید پایدار و سازگار با استانداردهای کارخانه‌ای مدرن.',
    order: 5,
    isActive: true,
    isFeaturedHome: true,
    sourceFileName: 'cert_5.jpg',
    targetFileName: 'cert-hse-ms.jpg',
    alt: 'گواهینامه HSE-MS سیستم مدیریت ایمنی، بهداشت و محیط زیست شرکت هزاره کالا',
  },
]

export async function seedCertificates() {
  console.log('=== شروع بذردهی امن و پایدار گواهینامه‌ها و استانداردها (Seed Certificates) ===')

  const { getPayload } = await import('payload')
  const configModule = await import('./payload.config')
  const config = configModule.default

  const payload = await getPayload({ config })

  // Candidates for finding extracted source images
  const scratchDir = path.resolve(
    'C:/Users/MohamadAli Zarei/.gemini/antigravity/brain/3a6fdac8-1808-4f14-9e70-6cfb957ae1db/scratch/extracted_certs',
  )
  const cmsPublicMedia = path.resolve(process.cwd(), 'public/media')

  if (!fs.existsSync(cmsPublicMedia)) {
    fs.mkdirSync(cmsPublicMedia, { recursive: true })
  }

  let createdCount = 0
  let updatedCount = 0

  for (const certData of CERTIFICATES_DATA) {
    console.log(`\nدر حال پردازش گواهینامه: [${certData.standard}] ${certData.title}`)

    // 1. Resolve media file buffer
    let fileBuffer: Buffer | null = null
    const candidatePaths = [
      path.join(process.cwd(), 'media-seed', certData.sourceFileName),
      path.join(scratchDir, certData.sourceFileName),
      path.join(cmsPublicMedia, certData.targetFileName),
      path.join(cmsPublicMedia, certData.sourceFileName),
    ]

    for (const p of candidatePaths) {
      if (fs.existsSync(p)) {
        fileBuffer = fs.readFileSync(p)
        break
      }
    }

    if (!fileBuffer) {
      console.warn(`⚠️ فایل تصویری منبع برای گواهینامه ${certData.standard} یافت نشد.`)
      continue
    }

    // 2. Ensure media record exists in Payload Media collection
    let mediaDocId: string | null = null

    const existingMedia = await payload.find({
      collection: 'media',
      where: {
        or: [
          { filename: { equals: certData.targetFileName } },
          { alt: { equals: certData.alt } },
        ],
      },
      limit: 1,
    })

    if (existingMedia.docs.length > 0) {
      mediaDocId = existingMedia.docs[0].id as string
      console.log(`✓ مدیا مربوطه قبلاً ثبت شده است (Media ID: ${mediaDocId})`)
    } else {
      console.log(`در حال آپلود و ایجاد مدیا جدید: ${certData.targetFileName}...`)
      const createdMedia = await payload.create({
        collection: 'media',
        data: {
          alt: certData.alt,
        },
        file: {
          data: fileBuffer,
          mimetype: 'image/jpeg',
          name: certData.targetFileName,
          size: fileBuffer.length,
        },
      })
      mediaDocId = createdMedia.id as string
      console.log(`✓ مدیا جدید با موفقیت ایجاد شد (Media ID: ${mediaDocId})`)
    }

    // 3. Check for existing certificate by unique registrationNumber
    const existingCert = await payload.find({
      collection: 'certificates',
      where: {
        registrationNumber: { equals: certData.registrationNumber },
      },
      limit: 1,
    })

    const certPayloadData = {
      title: certData.title,
      subtitle: certData.subtitle,
      standard: certData.standard,
      issuingAuthority: certData.issuingAuthority,
      registrationNumber: certData.registrationNumber,
      issueDate: certData.issueDate,
      description: certData.description,
      image: mediaDocId,
      order: certData.order,
      isActive: certData.isActive,
      isFeaturedHome: certData.isFeaturedHome,
    }

    if (existingCert.docs.length > 0) {
      const existing = existingCert.docs[0]
      // Preserve user-assigned image or custom edits from admin panel
      const updateData: Record<string, any> = {
        issuingAuthority: certData.issuingAuthority,
      }
      if (!existing.image) {
        updateData.image = mediaDocId
      }
      await payload.update({
        collection: 'certificates',
        id: existing.id,
        data: updateData,
      })
      updatedCount++
      console.log(`✓ رکورد گواهینامه موجود بررسی شد (ID: ${existing.id}). تصویر سفارشی کاربر حفظ گردید.`)
    } else {
      const newCert = await payload.create({
        collection: 'certificates',
        data: certPayloadData,
      })
      createdCount++
      console.log(`✓ گواهینامه جدید با موفقیت ایجاد شد (ID: ${newCert.id})`)
    }
  }

  console.log('\n=============================================')
  console.log(`پایان عملیات بذردهی گواهینامه‌ها.`)
  console.log(`تعداد ایجاد شده: ${createdCount} | تعداد به‌روزرسانی شده: ${updatedCount}`)
  console.log('هیچ دیتابیس یا مجموعه‌ای حذف یا تخریب نشد. امنیت کامل برقرار است.')
  console.log('=============================================\n')
}

if (process.argv[1] && process.argv[1].endsWith('seed-certificates.ts')) {
  seedCertificates()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error('خطای اسکریپت seed-certificates:', err)
      process.exit(1)
    })
}
