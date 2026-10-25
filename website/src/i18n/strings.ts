// Arabic is written first; English mirrors it key for key.
export const strings = {
  ar: {
    brand: 'بنّاء',
    switchLanguage: 'English',
    heroTitle: 'هاتفك، بقواعدك أنت',
    heroBody:
      'بنّاء تطبيق لسطح المكتب يقفل التطبيقات المشتتة على هاتفك. الهاتف وحده لا يستطيع فك القفل.',
    heroCta: 'اعرف المزيد',
    featuresTitle: 'كيف يساعدك بنّاء',
    features: [
      {
        title: 'جلسات تركيز لا تنتهي مبكرًا',
        body: 'اختر ٢٥ أو ٥٠ أو ٩٠ دقيقة. إعادة التشغيل أو تغيير الساعة لا ينهي الجلسة.',
      },
      {
        title: 'جداول أسبوعية',
        body: 'حدد أوقاتك المحمية، ولا يمكن رفعها أثناء سريانها.',
      },
      {
        title: 'المفتاح على حاسوبك',
        body: 'حاسوبك المقترن وحده يستطيع تخفيف القيود، وبعد فترة انتظار.',
      },
      {
        title: 'بلا خوادم',
        body: 'بياناتك تبقى على أجهزتك. لا شيء يغادرها.',
      },
    ],
    footer: 'بنّاء. جميع الحقوق محفوظة.',
  },
  en: {
    brand: 'Bannaa',
    switchLanguage: 'العربية',
    heroTitle: 'Your phone, on your terms',
    heroBody:
      'Bannaa is a desktop app that locks distracting apps on your phone. The phone alone can’t undo the lock.',
    heroCta: 'Learn more',
    featuresTitle: 'How Bannaa helps',
    features: [
      {
        title: 'Focus sessions that can’t end early',
        body: 'Pick 25, 50 or 90 minutes. A reboot or clock change won’t end the session.',
      },
      {
        title: 'Weekly schedules',
        body: 'Set your protected hours. They can’t be lifted while running.',
      },
      {
        title: 'The key lives on your computer',
        body: 'Only your paired computer can loosen limits, and only after a cool-off.',
      },
      {
        title: 'No servers',
        body: 'Your data stays on your devices. Nothing leaves them.',
      },
    ],
    footer: 'Bannaa. All rights reserved.',
  },
} as const

export type Lang = keyof typeof strings
