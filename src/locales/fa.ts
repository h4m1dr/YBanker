export default {
  // واژگان خاص Sub-Store
  specificWord: {
    singleSub: "تک اشتراک",
    collectionSub: "مجموعه اشتراک",
    file: "فایل",
    syncConfig: "تنظیمات همگام‌سازی",
    share: "اشتراک‌گذاری",
    unknownType: "نوع نامشخص",
    unknownSource: "منبع نامشخص",
    unknown: "نامشخص",
    all: "همه",
    untagged: "بدون برچسب",
    or: "یا",
    type: "نوع",
    none: "هیچ",
    confirm: "تأیید",
  },

  globalNotify: {
    refresh: {
      succeed: "بروزرسانی کامل شد",
      flowFailed: "بروزرسانی {name} ناموفق بود!",
      failed: "بروزرسانی ناموفق بود\n",
      loading: "در حال بروزرسانی داده‌ها...",
      rePwaing: "در حال ریست کش PWA...",
      rePwa: "کش PWA با موفقیت ریست شد. صفحه به‌زودی رفرش می‌شود...",
    },
    share: {
      title: "اشتراک‌گذاری",
      expiresValue: "مدت انقضا",
      expiresValueEmpty: "مدت انقضا نمی‌تواند خالی باشد",
      expiresValuePlaceholder: "مدت انقضا را وارد کنید",
      expiresValueRegex: "لطفاً عددی بین 0.01 تا 99999.99 وارد کنید",
      expiresUnit: "واحد انقضا",
      token: "توکن سفارشی",
      tokenPlaceholder: "توکن تصادفی پیش‌فرض بک‌اند",
      remark: "یادداشت",
      remarkPlaceholder: "یادداشت را وارد کنید",
      shareUrl: "لینک اشتراک‌گذاری",
      shareUrlPlaceholder: "برای ساخت لینک روی دکمه کلیک کنید",
      tipsTitle: "نکات",
      userKnow: "متوجه شدم",
      confirm: "تأیید",
      cancel: "بازگشت",
      createShare: "ساخت اشتراک",
      copyShare: "کپی لینک",
      copyShareSuccessTips: "لینک اشتراک کپی شد!",
      createShareSuccessTips: "اشتراک ساخته شد!",
      unit: {
        day: "روز",
        month: "ماه",
        season: "فصل",
        year: "سال",
      },
    },
  },

  // نوار عنوان
  navBar: {
    langSwitcher: {
      cellTitle: "برای تغییر زبان روی زبان مورد نظر ضربه بزنید",
      zh: "简体中文",
      en: "English",
      ru: "Русский",
      language: "زبان",
    },
    listView: {
      switchToSingle: "تغییر به تک‌ستونه",
      switchToDual: "تغییر به دوستونه",
      disabledInSelectionMode: "در حالت انتخاب چندگانه فقط تک‌ستونه فعال است",
      disabledInNarrowNavigationMode: "در حالت ناوبری باریک فقط تک‌ستونه فعال است",
    },
    navigationMode: {
      switchToNarrow: "تغییر به ناوبری باریک",
      switchToWide: "تغییر به ناوبری پهن",
    },
    simpleMode: {
      switchToSimple: "فعال‌سازی حالت ساده (فشرده‌تر)",
      switchToNormal: "غیرفعال‌سازی حالت ساده (جزئیات بیشتر)",
    },
    listSearch: {
      open: "جستجو",
      placeholder: "نام/برچسب/یادداشت (در صورت نمایش)",
      clear: "پاک کردن جستجو",
      close: "بستن جستجو",
    },
    pagesTitle: {
      sub: "اشتراک",
      file: "فایل",
      sync: "همگام‌سازی",
      my: "پروفایل من",
      editScript: "ویرایش اسکریپت",
      subEditor: "ویرایش اشتراک",
      fileEditor: "ویرایش فایل",
      syncEditor: "ویرایش همگام‌سازی",
      preview: "پیش‌نمایش",
      shareManage: "اشتراک‌گذاری",
      shareEditor: "ویرایش اشتراک‌گذاری",
      archive: "بایگانی",
      logs: "لاگ‌های بک‌اند",
      themeSetting: "تنظیمات تم",
      moreSetting: "تنظیمات بیشتر",
      apiSetting: "مدیریت بک‌اند",
      aboutUs: "درباره Sub-Store",
      notFound: "صفحه پیدا نشد",
      askWhat: {
        sync: {
          title: "همگام‌سازی چیست؟",
          content:
            "اشتراک‌ها/فایل‌های خود را در Gist خصوصی آپلود کنید تا در هر دستگاهی که Sub-Store را اجرا نمی‌کند (مثلاً روترها) قابل دسترسی باشد.",
        },
        subEditor: {
          title: "اشتراک دانلود نمی‌شود؟",
          content: "سعی کنید User-Agent را تغییر دهید. پیش‌فرض UA کوآنتوم‌اکس است.",
        },
        moreSetting: {
          title: "تلاش",
          content: "تلاش",
        },
      },
    },
  },

  tabBar: {
    sub: "اشتراک‌ها",
    sync: "همگام‌سازی",
    my: "پروفایل",
    file: "فایل",
    share: "اشتراک‌گذاری",
    archive: "بایگانی",
  },

  // صفحه ۴۰۴
  notFoundPage: {
    title: "اوه! خطای URL!",
    desc: "بازگشت به صفحه اصلی",
    backendDesc:
      "اگر این پیغام را می‌بینید، احتمالاً به دلیل مشکل مسیر‌یابی در فرانت‌اند مرورگر شماست. می‌توانید صفحه را با نیرو رفرش کنید یا مستقیماً از لینک استفاده کنید، مشکلی ایجاد نمی‌شود.",
  },

  filePage: {
    type: {
      mihomoProfile: "پروفایل Mihomo",
      mihomoProfileTips: "پشتیبانی از override",
      mihomoProfileTips2: "پشتیبانی از override (جاوااسکریپت/YAML)",
    },
    addFileTitle: "ساخت فایل",
    importFileTitle: "وارد کردن داده‌های فایل",
    importFileTips:
      "در صفحه مدیریت فایل، روی دکمه آیکون Export در بخش بیشتر یک فایل کلیک کنید.",
    deleteFile: {
      succeedNotify: "با موفقیت حذف شد!",
    },
    content: {
      placeholder: "محتوای فایل",
    },
    url: {
      label: "آدرس",
      placeholder:
        "پشتیبانی از آدرس‌های راه‌دور، ارجاع به فایل داخلی و مسیرهای مطلق محلی. پارامترهای پشتیبانی شده: noCache، cacheTtl، insecure، headers، age-secret-key. برای جزئیات روی راهنما کلیک کنید.",
      tips: {
        label: "راهنما",
        title: "آدرس(های) فایل",
        content:
          "پشتیبانی از ترکیب سه نوع فرمت با خط جدید:\n1. آدرس کامل راه‌دور\n2. ارجاع به فایل داخلی مانند /api/file/name\n3. مسیر مطلق برای فایل محلی\n\nپارامترهای پشتیبانی شده:\n\nheaders: هدرهای سفارشی درخواست (رشته JSON تک‌خطی)\ninsecure: درخواست‌های https گواهی سرور را تأیید نمی‌کنند\nnoCache: از کش استفاده نکن\ncacheTtl: مدت زمان کش (ثانیه)\nage-secret-key: کلید خصوصی رمزگشایی age، متناظر با age-secret-key در proxy-providers میهومو، برای رمزگشایی محتوای age armor دریافت شده از راه‌دور. فقط کلیدهای AGE-SECRET-KEY-1... X25519 و AGE-SECRET-KEY-PQ-1... MLKEM768-X25519 پشتیبانی می‌شوند. کلیدهای SSH/گذرواژه/پلاگین پشتیبانی نمی‌شوند. این کلید رمزنگاری خروجی نهایی نیست؛ آن را به اشتراک نگذارید و در لاگ‌های عمومی قرار ندهید.\n\nمثال: http://a.com#noCache&insecure",
      },
      isEmpty: "آدرس نمی‌تواند خالی باشد",
      isIllegal: "آدرس نامعتبر است",
    },
    copyNotify: {
      succeed:
        "لینک با موفقیت کپی شد!\nاگر داخلی استفاده می‌کنید، فقط {path} را وارد کنید",
      failed: "کپی لینک فایل ناموفق بود!\n{e}",
    },
    emptySub: {
      title: "هنوز فایلی ندارید",
      desc: "پس از افزودن می‌توانید از عشق YM Peng لذت ببرید",
      btn: "همین حالا فایل بسازید",
    },
    source: {
      local: "محلی",
      remote: "راه‌دور",
    },
    ignoreFailedRemoteFile: {
      label: "رفتار در صورت شکست فایل راه‌دور",
      disabled: "خطاهای سخت‌گیرانه",
      disabledDesc:
        "در صورت شکست درخواست فایل راه‌دور، بلافاصله خطا داده و اعلان نشان داده شود.",
      disabledNote: "خطا + اعلان",
      enabled: "رد شدن + اعلان",
      enabledDesc: "فایل‌های راه‌دور ناموفق را رد کرده و اعلان نشان بده.",
      enabledNote: "رد کردن فایل‌های ناموفق",
      quiet: "رد شدن بی‌صدا",
      quietDesc: "فایل‌های راه‌دور ناموفق را بدون نمایش اعلان رد کن.",
      quietNote: "رد کردن فایل‌های ناموفق",
    },
    download: {
      label: "فعال‌سازی دانلود (نام فایل: نام نمایشی)",
    },
  },

  // صفحه مدیریت اشتراک
  subPage: {
    import: {
      label: "وارد کردن",
      succeed: "وارد کردن با موفقیت انجام شد!",
      failed: "وارد کردن ناموفق بود!\n{e}",
      tipsTitle: "وارد کردن داده‌های اشتراک",
      tipsContent:
        "در صفحه مدیریت اشتراک، روی دکمه آیکون Export در بخش بیشتر یک اشتراک کلیک کنید.",
    },
    addSubTitle: "انتخاب نوع اشتراک",
    previewTitle: "کپی/پیش‌نمایش یک اشتراک",
    tag: {
      addTagTitle: "افزودن برچسب",
      tagPlaceholder: "نام برچسب را وارد کنید",
      addTagBtn: "+ برچسب جدید",
    },
    emptySub: {
      title: "هنوز اشتراکی ندارید",
      desc: "پس از افزودن می‌توانید از عشق YM Peng لذت ببرید",
      btn: "همین حالا اشتراک بسازید",
    },
    loadFailed: {
      title: "بارگذاری داده‌ها ناموفق بود",
      desc: "لطفاً MITM، Rewrite و سایر تنظیمات را در ابزار پروکسی بررسی کنید",
      btn: "تلاش مجدد",
      doc: "مشاهده مستندات Sub-Store",
      followOfficialChannel:
        "همچنین می‌توانید کانال رسمی Sub-Store را دنبال کرده و در گروه سوال بپرسید",
      about: "مشاهده پروژه و آموزش",
    },
    collectionItem: {
      noSub: "هیچ اشتراکی درج نشده است",
      contain: "اشتراک‌های درج شده",
      containTag: "برچسب‌های اشتراک درج شده",
    },
    subItem: {
      local: "اشتراک محلی",
      loading: "در حال بارگذاری...",
      flow: "مصرف / کل",
      showRemainingFlow: "باقی‌مانده / کل",
      expires: "انقضا",
      remainingDays: "روزهای باقی‌مانده تا ریست",
      remainingDaysUnit: "",
      noRecord: "برای دریافت اطلاعات مصرف، بروزرسانی کنید",
      noFlow: "بدون ترافیک",
      noFlowInfo: "اطلاعات ترافیک موجود نیست",
      flowError: "دریافت اطلاعات مصرف ناموفق بود",
      noExpiresInfo: "اطلاعات انقضا موجود نیست",
    },
    deleteSub: {
      title: "حذف",
      desc: "آیا از حذف {displayName} مطمئن هستید؟ \nقابل بازیابی نیست!",
      succeedNotify: "با موفقیت حذف شد!",
      btn: {
        confirm: "حذف",
        cancel: "لغو",
      },
    },
    copyNotify: {
      succeed: "لینک با موفقیت کپی شد!",
      failed: "کپی لینک اشتراک ناموفق بود!\n{e}",
    },
    copyConfigNotify: {
      loading: "در حال کپی‌کردن تنظیمات...",
      succeed: "تنظیمات با موفقیت کپی شد!",
      failed: "کپی تنظیمات ناموفق بود!\n{e}",
    },
    exportConfigNotify: {
      loading: "در حال خروجی‌گیری...",
      succeed: "خروجی با موفقیت انجام شد!",
      failed: "خروجی ناموفق بود!\n{e}",
    },
    panel: {
      general: "عمومی",
      options: {
        includeUnsupportedProxy: "پروتکل‌های پشتیبانی نشده",
        prettyYaml: "YAML خوانا",
      },
      tips: {
        ok: "مشاهده مستندات",
        cancel: "لغو",
        desc: "برخی از ویژگی‌ها نیاز به پارامتر دارند. لطفاً مستندات را بررسی کنید.",
        title: "پارامترهای لینک اشتراک",
        content:
          "https://github.com/sub-store-org/Sub-Store/wiki/%E9%93%BE%E6%8E%A5%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",
      },
    },
  },

  editorPage: {
    groupingTips: {
      open: "راهنمای گروه‌بندی صفحه جزئیات",
      title: "گروه‌بندی صفحه جزئیات",
      content:
        "اگر گروه‌بندی را دوست ندارید، آن را در «پروفایل من / تنظیمات بیشتر / استفاده از گروه‌بندی در صفحات جزئیات» تغییر دهید.",
      goSettings: "رفتن به تنظیمات",
      cancel: "لغو",
    },
    commonTips: {
      open: "راهنمای تنظیمات رایج صفحه جزئیات",
      title: "تنظیمات رایج صفحه جزئیات",
      content:
        "می‌توانید حالت نمایش را در «پروفایل من / تنظیمات بیشتر / تنظیمات رایج صفحه جزئیات» تنظیم کنید.",
      goSettings: "رفتن به تنظیمات",
      cancel: "لغو",
    },
    subConfig: {
      btn: {
        compare: "پیش‌نمایش",
        save: "ذخیره",
      },
      editorTabs: {
        basic: "پایه",
        source: "منبع",
        content: "محتوا",
        common: "رایج",
        actions: "عملیات",
        sync: "همگام‌سازی",
        expiration: "انقضا",
        display: "نمایش",
      },
      pop: {
        helpTitle: "راهنما",
        helpContent:
          "عملیات بر روی گره‌های پروکسی به ترتیب انجام می‌شوند و می‌توانید با کشیدن و رها کردن آنها را مرتب کنید.\n\nسوئیچ پیش‌نمایش برای کنترل اینکه آیا عملیات در پیش‌نمایش لحظه‌ای اعمال شود یا نه استفاده می‌شود.\n\nتوجه داشته باشید که عملیات گره‌ها ذخیره شده و صرف‌نظر از روشن یا خاموش بودن سوئیچ پیش‌نمایش اعمال خواهند شد.",
        helpBtn: "متوجه شدم",
        errorTitle: "خطا در ارسال!",
        errorBtn: "باشه",
        succeedMsg: "ذخیره با موفقیت انجام شد!",
        deleteTitle: "تأیید حذف",
        deleteDes:
          "آیا از حذف این عملیات مطمئن هستید؟ عملیات حذف شده قابل بازیابی نیست!",
        deleteConfirm: "حذف کن",
        deleteCancel: "لغو",
        clearTitle: "تأیید پاک‌کردن",
        clearDes: "آیا از پاک‌کردن این محتوا مطمئن هستید؟",
        clearConfirm: "پاک کن",
        clearCancel: "لغو",
        leaveCancel: "ادامه ویرایش",
        leaveConfirm: "خروج",
        leaveConfirmTitle: "تغییرات ذخیره نشده",
        leaveContent:
          "تغییرات ذخیره نشده از بین خواهند رفت.\n\nآیا از خروج از ویرایش مطمئن هستید؟",
        clickTag: {
          title: "برای ویرایش روی برچسب کلیک کنید",
          content:
            "مطالب ذخیره نشده‌ای در جعبه ورودی وجود دارد. ویرایش برچسب‌های دیگر باعث از دست رفتن آنها می‌شود.\n\nآیا تأیید می‌کنید؟",
          confirm: "تأیید",
          cancel: "لغو",
        },
      },
      basic: {
        label: "تنظیمات اشتراک",
        previewSwitch: "پیش‌نمایش",
        previewDisabledResponseOnlyTips:
          "تغییر پاسخ فقط قبل از ارسال پاسخ دانلود اجرا می‌شود. پیش‌نمایش لحظه‌ای آن را اجرا نمی‌کند.",
        nodeActionsHelp: "راهنمای عملیات گره",
        name: {
          label: "نام",
          placeholder: "نام یکتا (شامل / نباشد)",
          isEmpty: "نام نمی‌تواند خالی باشد",
          isInvalid: "این نام قبلاً استفاده شده یا نامعتبر است",
        },
        remark: {
          label: "یادداشت",
          placeholder: "یادداشت",
        },
        displayName: {
          label: "نام نمایشی",
          placeholder: "نام نمایشی",
        },
        subInfoUrl: {
          label: "آدرس اطلاعات اشتراک",
          placeholder:
            "آدرس برای دریافت اطلاعات مصرف (پشتیبانی از هدر و غیره)",
          tips: {
            title: "آدرس اطلاعات اشتراک",
            content:
              'آدرسی که برای دریافت اطلاعات مصرف استفاده می‌شود. بدنه پاسخ، یا هدرهای پاسخ subscription-userinfo/profile-web-page-url/plan-name به عنوان اطلاعات مصرف استفاده می‌شوند.\n\nپارامترهای پشتیبانی شده:\nheaders: هدرهای سفارشی (رشته JSON تک‌خطی)\ninsecure: عدم تأیید گواهی سرور\nnoCache: عدم استفاده از کش\nheadersCacheTtl: مدت کش هدرها (ثانیه)\n\nمثال: http://a.com/userinfo#headers=%7B%22Authorization%22%3A%22Bearer%20token%22%7D',
          },
        },
        subInfoUserAgent: {
          label: "User-Agent اطلاعات اشتراک",
          placeholder: "User-Agent برای دریافت اطلاعات مصرف",
        },
        tag: {
          label: "برچسب(ها)",
          placeholder:
            "روی آیکون سمت راست کلیک کنید، برچسب(ها) (با کاما جدا شده) برای گروه‌بندی استفاده می‌شود.",
        },
        subscriptionTags: {
          label: "برچسب(های) اشتراک",
          placeholder:
            "روی آیکون سمت راست کلیک کنید، همه اشتراک‌هایی که شامل یکی از این برچسب‌ها هستند (با کاما جدا شده) را شامل می‌شود.",
        },
        source: {
          label: "منبع",
          remote: "آدرس راه‌دور",
          local: "محلی",
          mergeSources: "ادغام منابع",
          noMerge: "غیرفعال",
          localFirst: "محلی اولویت دارد",
          remoteFirst: "راه‌دور اولویت دارد",
        },
        url: {
          label: "آدرس",
          placeholder:
            "پشتیبانی از چند خط و پارامتر، لطفاً برای مشاهده راهنما روی دکمه سمت چپ کلیک کنید.",
          tips: {
            importFromFile: "وارد کردن از فایل",
            fullScreenEdit: "ویرایش تمام صفحه",
            fullScreenEditCancel: "خروج از ویرایش تمام صفحه",
            label: "راهنما",
            title: "آدرس(های) اشتراک",
            content:
              "پشتیبانی از ترکیب سه نوع فرمت با خط جدید:\n1. آدرس کامل راه‌دور\n2. ارجاع به فایل داخلی مانند /api/file/name\n3. مسیر مطلق برای فایل محلی\n\nپارامترهای پشتیبانی شده:\n\nheaders: هدرهای سفارشی درخواست (رشته JSON تک‌خطی)\ninsecure: درخواست‌های https گواهی سرور را تأیید نمی‌کنند\ncacheKey: نام کش خوش‌بینانه را تنظیم کنید. مناسب برای اشتراک‌هایی که اغلب در دریافت ناموفق هستند. هنگامی که فعال شد، می‌توانید آن را در حافظه پایدار مدیریت کنید (پیشوند: \"sub-store-cached-custom-\").\n\nvalidCheck: در صورت انقضا یا عدم وجود ترافیک باقی‌مانده خطا گزارش می‌شود\n\nflowUserAgent: User-Agent برای دریافت اطلاعات مصرف\n\nflowHeaders: هدرهای سفارشی برای دریافت اطلاعات مصرف (رشته JSON تک‌خطی)\n\nflowUrl: آدرس برای دریافت اطلاعات مصرف (با استفاده از محتوای بدنه یا هدرهای پاسخ)\n\nshowRemaining: نمایش ترافیک باقی‌مانده به جای مصرف شده\n\nnoFlow: عدم جستجوی ترافیک\n\nhideExpire: مخفی‌کردن زمان انقضا\n\nnoCache: عدم استفاده از کش\n\ncacheTtl: مدت زمان کش (ثانیه)\n\nheadersCacheTtl: مدت زمان کش هدرها (ثانیه)\n\nresetDay: روز بازنشانی مصرف ماهانه\n\nstartDate: تاریخ شروع اشتراک\n\ncycleDays: چرخه بازنشانی (به روز).\n\nage-secret-key: کلید خصوصی رمزگشایی age، متناظر با age-secret-key در proxy-providers میهومو، برای رمزگشایی محتوای age armor دریافت شده از راه‌دور. فقط کلیدهای AGE-SECRET-KEY-1... X25519 و AGE-SECRET-KEY-PQ-1... MLKEM768-X25519 پشتیبانی می‌شوند. کلیدهای SSH/گذرواژه/پلاگین پشتیبانی نمی‌شوند. این کلید رمزنگاری خروجی نهایی نیست؛ آن را به اشتراک نگذارید و در لاگ‌های عمومی قرار ندهید.\n\nمثال: http://a.com?token=1#cycleDays=31&startDate=2024-06-04 \nیا http://a.com?token=1#resetDay=15",
          },
          isEmpty: "آدرس نمی‌تواند خالی باشد",
          isIllegal: "آدرس نامعتبر است",
        },
        subscriptions: {
          label: "انتخاب اشتراک‌های درج شده",
          empty: "لطفاً ابتدا یک اشتراک بسازید، سپس از ویژگی مجموعه استفاده کنید",
          none: "هیچ",
        },
        content: {
          label: "محتوا",
          placeholder: "",
          tips: {
            title: "محتوای اشتراک",
            content:
              "محتوای اشتراک:\n\n1. چندین پروتکل پروکسی تک‌خطی/JSON5/YAML/URI\n\n2. Base64/YAML کامل",
          },
        },
        icon: {
          label: "آیکون",
          placeholder:
            "روی آیکون سمت چپ یا بالا کلیک کنید، لینک آیکون را از کتابخانه آیکون وارد کنید، از jpg استفاده نکنید.",
        },
        isIconColor: {
          label: "استفاده از رنگ اصلی آیکون سفارشی",
        },
        ignoreFailedRemoteSub: {
          label: "رفتار در صورت شکست اشتراک",
          disabled: "خطاهای سخت‌گیرانه",
          disabledDesc:
            "در صورت بروز خطا در پردازش اشتراک، بلافاصله خطا داده و اعلان نشان داده شود.",
          disabledNote: "خطا و اعلان",
          enabled: "رد شدن از راه‌دور + اعلان",
          enabledDesc:
            "اشتراک‌های راه‌دور ناموفق را رد کرده و اعلان نشان بده؛ سایر خطاها همچنان باعث شکست می‌شوند.",
          enabledNote: "سایر خطاها همچنان شکست",
          quiet: "رد شدن از راه‌دور بی‌صدا",
          quietDesc:
            "اشتراک‌های راه‌دور ناموفق را بدون اعلان رد کن؛ سایر خطاها همچنان شکست می‌خورند.",
          quietNote: "سایر خطاها همچنان شکست",
          fallbackNotify: "خالی در صورت خطا + اعلان",
          fallbackNotifyDesc:
            "اگر پردازش اشتراک با هر خطایی مواجه شود، نتیجه خالی برگردانده و اعلان نشان داده شود.",
          fallbackNotifyNote: "بازگشت نتیجه خالی",
          fallbackQuiet: "خالی در صورت خطا بی‌صدا",
          fallbackQuietDesc:
            "اگر پردازش اشتراک با هر خطایی مواجه شود، نتیجه خالی بدون اعلان برگردانده شود.",
          fallbackQuietNote: "بازگشت نتیجه خالی",
        },
        ua: {
          label: "User-Agent",
          placeholder: "User-Agent برای دانلود منبع(ها)",
          placeholderDisabled: "غیرفعال‌سازی UA سفارشی هنگام عبور دادن",
        },
        subUserinfo: {
          label: "اطلاعات اشتراک",
          placeholder:
            "مقدار/آدرس (آدرس پشتیبانی از headers/noCache/headersCacheTtl و غیره)",
        },
        firstSubFlow: {
          label: "عبور اطلاعات ترافیک تک اشتراک",
          tips: {
            title: "عبور اطلاعات ترافیک تک اشتراک",
            content:
              "به‌طور پیش‌فرض، اطلاعات ترافیک اولین اشتراک منفرد عبور داده می‌شود.\n\nبرای ادغام اطلاعات ترافیک همه اشتراک‌های منفرد در مجموعه، از اسکریپت https://t.me/zhetengsha/3070 استفاده کنید.",
            okText: "مشاهده",
          },
        },
        passThroughUA: {
          label: "عبور User-Agent درخواست",
          warning:
            "عبور User-Agent درخواست و UA سفارشی نمی‌توانند همزمان فعال باشند",
        },
        proxy: {
          label: "پروکسی/سیاست",
          placeholder: "پروکسی/گره/سیاست برای دانلود منبع(ها)",
        },
      },
      commonOptions: {
        label: "تنظیمات رایج",
        useless: {
          label: "حذف گره‌های بی‌استفاده",
          disabled: "نگهداری",
          enabled: "حذف",
        },
        udp: {
          label: "UDP Relay",
          default: "پیش‌فرض",
          enabled: "اجبار به فعال",
          disabled: "اجبار به غیرفعال",
        },
        scert: {
          label: "رد شدن از تأیید TLS",
          default: "پیش‌فرض",
          enabled: "اجبار به فعال",
          disabled: "اجبار به غیرفعال",
        },
        tfo: {
          label: "TCP Fast Open",
          default: "پیش‌فرض",
          enabled: "اجبار به فعال",
          disabled: "اجبار به غیرفعال",
        },
        "vmess aead": {
          label: "Vmess AEAD",
          default: "پیش‌فرض",
          enabled: "اجبار به فعال",
          disabled: "اجبار به غیرفعال",
        },
      },
      // surgeOptions: {
      //   label: 'Surge 配置',
      //   hybrid: {
      //     label: 'Hybrid 策略',
      //     default: '默认',
      //     open: '强制开启',
      //     close: '强制关闭',
      //   },
      // },
      actions: {
        label: "عملیات گره",
        addAction: {
          title: "افزودن عملیات",
          cancel: "لغو",
          confirm: "تأیید",
        },
        pasteAction: {
          label: "وارد کردن داده از کلیپ‌بورد",
          placeholder:
            "خواندن خودکار کلیپ‌بورد ناموفق بود، لطفاً داده را به‌صورت دستی در این کادر بچسبانید.",
        },
        enable: "فعال",
        disable: "غیرفعال",
      },
      nodeActions: {
        "Flag Operator": {
          label: "عملیات پرچم",
          des: "حالت",
          options: ["افزودن پرچم", "حذف پرچم"],
          twOptions: ["⇒ 🇨🇳", "⇒ 🇼🇸", "بدون تغییر"],
          tipsTitle: "راهنمای پرچم",
          tipsDes: "دستورالعمل عملیات پرچم",
        },
        "Sort Operator": {
          label: "مرتب‌سازی گره",
          des: "ترتیب",
          options: ["صعودی", "نزولی", "تصادفی"],
          tipsTitle: "راهنمای مرتب‌سازی",
          tipsDes: "توضیحات عملیات مرتب‌سازی گره",
        },
        "Resolve Domain Operator": {
          label: "حل دامنه",
          des: 'ارائه‌دهندگان (قابل کنترل توسط فیلد گره "_no-resolve")',
          options: [
            "Google",
            "IP-API",
            "Cloudflare",
            "Ali",
            "Tencent",
            "سفارشی",
          ],
          types: ["IPv4", "IPv6"],
          filters: [
            "غیرفعال",
            "حذف ناموفق‌ها",
            "فقط IP",
            "فقط IPv4",
            "فقط IPv6",
          ],
          cache: ["فعال", "غیرفعال"],
          concurrency: "همزمانی درخواست",
          concurrencyPlaceholder:
            "پیش‌فرض 10. در برنامه‌های پروکسی حداکثر 20 توصیه می‌شود",
          tipsTitle: "راهنمای دامنه",
          tipsDes: "دستورالعمل عملیات حل دامنه گره",
        },
        "Region Filter": {
          label: "فیلتر منطقه",
          des: ["منطقه", "حالت"],
          modeOptions: ["نگهداری", "حذف"],
          options: [
            "🇭🇰 HK",
            "🇨🇳 TW",
            "🇸🇬 SG",
            "🇯🇵 JP",
            "🇬🇧 UK",
            "🇺🇸 US",
            "🇩🇪 DE",
            "🇰🇷 KR",
          ],
          tipsTitle: "راهنمای فیلتر منطقه",
          tipsDes: "دستورالعمل عملیات فیلتر منطقه",
        },
        "Type Filter": {
          label: "فیلتر نوع گره",
          des: ["نوع", "حالت"],
          modeOptions: ["نگهداری", "حذف"],
          options: [
            "Shadowsocks",
            "ShadowsocksR",
            "VMess",
            "VLESS",
            "Trojan",
            "HTTP(s)",
            "HTTP/2 CONNECT",
            "SOCKS5",
            "Snell",
            "TUIC",
            "Hysteria",
            "Hysteria 2",
            "Juicity",
            "mieru",
            "sudoku",
            "MASQUE",
            "NaïveProxy",
            "AnyTLS",
            "TrustTunnel",
            "OpenVPN",
            "GOST Relay",
            "Tailscale",
            "WireGuard",
            "SSH",
            "برنامه پروکسی خارجی",
            "مستقیم",
          ],
          tipsTitle: "راهنمای فیلتر نوع گره",
          tipsDes: "توضیحات عملیات فیلتر نوع گره",
        },
        "Regex Filter": {
          label: "فیلتر Regex",
          des: ["عبارت منظم", "حالت"],
          options: ["نگهداری", "حذف"],
          placeholder: ["عبارت منظم"],
          tipsTitle: "راهنمای فیلتر Regex",
          tipsDes: "دستورالعمل عملیات فیلتر با عبارت منظم",
        },
        "Regex Sort Operator": {
          label: "مرتب‌سازی Regex",
          des: ["عبارت منظم", "مرتب‌سازی گره‌های نامطابق"],
          options: ["صعودی", "نزولی", "اصلی"],
          placeholder: ["عبارت منظم"],
          tipsTitle: "راهنمای مرتب‌سازی Regex",
          tipsDes: "دستورالعمل عملیات مرتب‌سازی با عبارت منظم",
        },
        "Regex Delete Operator": {
          label: "حذف Regex",
          des: ["عبارت منظم"],
          placeholder: ["عبارت منظم"],
          tipsTitle: "راهنمای حذف Regex",
          tipsDes: "دستورالعمل عملیات حذف با عبارت منظم",
        },
        "Regex Rename Operator": {
          label: "تغییر نام Regex",
          des: ["عبارت منظم"],
          placeholder: ["عبارت منظم", "جایگزین با"],
          tipsTitle: "راهنمای تغییر نام Regex",
          tipsDes: "دستورالعمل عملیات تغییر نام با عبارت منظم",
        },
        "Handle Duplicate Operator": {
          label: "مدیریت تکراری‌ها",
          action: { options: ["تغییر نام", "حذف"], des: "عملیات" },
          position: { options: ["پیشوند", "پسوند"], des: "موقعیت شماره" },
          template: {
            des: "قالب شماره",
            placeholder: "قالب نمایش شماره سریال، با فاصله جدا شده",
          },
          link: {
            des: "جداکننده",
            placeholder: "اتصال دهنده بین نام گره و شماره سریال",
          },
          field: {
            des: "فیلد حذف تکراری (پشتیبانی از چند فیلد و سینتکس lodash get)",
            placeholder:
              "فیلد برای حذف تکراری، مثلاً نام گره، لطفاً name را وارد کنید",
          },
          tipsTitle: "راهنمای مدیریت تکراری‌ها",
          tipsDes: "دستورالعمل عملیات حذف تکراری گره",
        },
        "Script Filter": {
          label: "فیلتر اسکریپت",
          options: ["لینک راه‌دور", "محتوی محلی"],
          des: ["نوع", "محتوا"],
          placeholder:
            "لینک اسکریپت یا فایل داخلی مانند /api/file/name را وارد کنید. علاوه بر پارامترهای خود اسکریپت، پارامترهای اضافی پشتیبانی می‌شوند: noCache - عدم استفاده از کش، insecure - عدم تأیید گواهی سرور. مثال: http://a.com#a=1&b=2#noCache&insecure",
          openEditorBtn: "باز کردن ویرایشگر کد",
          tipsTitle: "راهنمای فیلتر اسکریپت",
          tipsDes: "استفاده از اسکریپت جاوااسکریپت برای فیلتر کردن گره‌ها",
          paramsEdit: "ویرایش پارامترها",
          helpTitle: "نکات",
          noCache: "noCache",
          insecure: "insecure",
          noCacheTips:
            "هنگامی که کش غیرفعال است، اسکریپت در هر درخواست دوباره دریافت می‌شود.",
          insecureTips:
            "هنگامی که insecure فعال باشد، گواهی سرور تأیید نمی‌شود.",
          paramsEditTips:
            "ویرایشگر پارامتر بصری، در صورت تکراری بودن نام کلید، اولویت با مقدار آخر است.",
          paramsAdd: "افزودن",
          paramsDelete: "حذف",
          paramsOptions: "گزینه‌ها",
          paramsEmpty: "بدون پارامتر",
          duplicateKeyWarning: "نام کلید تکراری",
        },
        "Script Operator": {
          label: "اپراتور اسکریپت",
          options: ["لینک راه‌دور", "محتوی محلی"],
          des: ["نوع", "محتوا"],
          placeholder:
            "لینک اسکریپت یا فایل داخلی مانند /api/file/name را وارد کنید. علاوه بر پارامترهای خود اسکریپت، پارامترهای اضافی پشتیبانی می‌شوند: noCache - عدم استفاده از کش، insecure - عدم تأیید گواهی سرور. مثال: http://a.com#a=1&b=2#noCache&insecure",
          openEditorBtn: "باز کردن ویرایشگر کد",
          tipsTitle: "راهنمای اپراتور اسکریپت",
          tipsDes: "استفاده از اسکریپت جاوااسکریپت برای تغییر اطلاعات گره",
          paramsEdit: "ویرایش پارامترها",
          noCache: "noCache",
          insecure: "insecure",
          helpTitle: "نکات",
          noCacheTips:
            "هنگامی که کش غیرفعال است، اسکریپت در هر درخواست دوباره دریافت می‌شود.",
          insecureTips:
            "هنگامی که insecure فعال باشد، گواهی سرور تأیید نمی‌شود.",
          paramsEditTips:
            "ویرایشگر پارامتر بصری، در صورت تکراری بودن نام کلید، اولویت با مقدار آخر است.",
          paramsAdd: "افزودن",
          paramsDelete: "حذف",
          paramsOptions: "گزینه‌ها",
          paramsEmpty: "بدون پارامتر",
          duplicateKeyWarning: "نام کلید تکراری",
        },
        "Response Transformer": {
          label: "تغییر پاسخ",
          options: ["لینک راه‌دور", "محتوی محلی"],
          des: ["نوع", "محتوا"],
          placeholder:
            "لینک اسکریپت یا فایل داخلی مانند /api/file/name را وارد کنید. علاوه بر پارامترهای خود اسکریپت، پارامترهای اضافی پشتیبانی می‌شوند: noCache - عدم استفاده از کش، insecure - عدم تأیید گواهی سرور. مثال: http://a.com#a=1&b=2#noCache&insecure",
          openEditorBtn: "باز کردن ویرایشگر کد",
          tipsTitle: "راهنمای تغییر پاسخ",
          tipsDes:
            "استفاده از اسکریپت جاوااسکریپت برای تغییر کد وضعیت، هدرها یا بدنه قبل از ارسال پاسخ دانلود. پیش‌نمایش لحظه‌ای آن را اجرا نمی‌کند.",
          paramsEdit: "ویرایش پارامترها",
          noCache: "noCache",
          insecure: "insecure",
          helpTitle: "نکات",
          noCacheTips:
            "هنگامی که کش غیرفعال است، اسکریپت در هر درخواست دوباره دریافت می‌شود.",
          insecureTips:
            "هنگامی که insecure فعال باشد، گواهی سرور تأیید نمی‌شود.",
          paramsEditTips:
            "ویرایشگر پارامتر بصری، در صورت تکراری بودن نام کلید، اولویت با مقدار آخر است.",
          paramsAdd: "افزودن",
          paramsDelete: "حذف",
          paramsOptions: "گزینه‌ها",
          paramsEmpty: "بدون پارامتر",
          duplicateKeyWarning: "نام کلید تکراری",
        },
      },
      sourceNamePicker: {
        title: "انتخاب نام اشتراک",
        cancel: "لغو",
        confirm: "تأیید",
        emptyTips: "اشتراک پیدا نشد؟ برای افزودن اشتراک کلیک کنید",
      },
    },
  },

  myPage: {
    placeholder: {
      name: "همگام‌سازی Gist تنظیم نشده",
      des: "برای فعال‌سازی همگام‌سازی، توکن GitHub را پیکربندی کنید",
      uploadTime: "آخرین زمان آپلود",
      haveNotDownload: "هنوز دانلود نشده",
      githubUser: "نام کاربری GitHub را وارد کنید",
      gistToken: "توکن GitHub را وارد کنید",
      githubProxy: "پروکسی GitHub را وارد کنید",
      githubApiUrl: "آدرس API GitHub (پیش‌فرض: https://api.github.com)",
      githubApiTimeout:
        "مهلت درخواست API GitHub (به میلی‌ثانیه، پیش‌فرض: 10000)",
      artifactSyncBatchSize: "اندازه دسته آپلود همگام‌سازی (پیش‌فرض: 10)",
      githubProxyRegex: "عبارت منظم تطبیق پروکسی GitHub را وارد کنید",
      defaultUserAgent: "User-Agent پیش‌فرض را وارد کنید",
      defaultFlowUserAgent:
        "User-Agent پیش‌فرض برای اطلاعات ترافیک را وارد کنید",
      defaultProxy: "پروکسی/سیاست پیش‌فرض را وارد کنید",
      defaultTimeout: "مهلت پیش‌فرض (به میلی‌ثانیه، پیش‌فرض: 8000)",
      backendRequestConcurrency:
        "همزمانی درخواست بک‌اند (پیش‌فرض: 10)",
      backendRequestConcurrencyWaitTime:
        "زمان انتظار همزمانی درخواست بک‌اند (به میلی‌ثانیه، پیش‌فرض: 0)",
      cacheThreshold: "آستانه کش (به کیلوبایت، پیش‌فرض: 1024)",
      resourceCacheTtl: "مدت کش منبع، پیش‌فرض: 3600 (ثانیه)",
      headersCacheTtl: "مدت کش هدرها، پیش‌فرض: 60 (ثانیه)",
      scriptCacheTtl: "مدت کش اسکریپت، پیش‌فرض: 172800 (ثانیه)",
      logsMaxCount: "حداکثر لاگ‌های ذخیره شده، پیش‌فرض: 0=خاموش",
      concurrency: "محدودیت همزمانی (پیش‌فرض: 3)",
      concurrencyWaitTime: "زمان انتظار همزمانی، پیش‌فرض: 0 (میلی‌ثانیه)",
      apiCheckTimeout: "مهلت بررسی API، پیش‌فرض: 3000 (میلی‌ثانیه)",
      apiRequestTimeout:
        "مهلت درخواست فرانت‌اند، پیش‌فرض: 50000 (میلی‌ثانیه)",
      noGithubUser: "نام کاربری GitHub تنظیم نشده",
      noGistToken: "توکن GitHub تنظیم نشده",
      noGithubProxy: "پروکسی GitHub تنظیم نشده",
      noGithubProxyRegex: "عبارت منظم پروکسی GitHub تنظیم نشده",
      noDefaultUserAgent: "User-Agent پیش‌فرض تنظیم نشده",
      noDefaultProxy: "پروکسی/سیاست پیش‌فرض تنظیم نشده",
      noDefaultTimeout: "مهلت پیش‌فرض تنظیم نشده",
      noCacheThreshold: "آستانه کش تنظیم نشده",
    },
    btn: {
      download: "دانلود",
      upload: "آپلود",
      cancel: "لغو",
      edit: "ویرایش",
      save: "ذخیره",
      clear: "پاک‌کردن",
    },
    notify: {
      save: {
        succeed: "ذخیره با موفقیت انجام شد",
        failed: "ذخیره ناموفق بود",
      },
      restore: {
        succeed: "بازیابی با موفقیت انجام شد",
        failed: "بازیابی ناموفق بود",
      },
      download: {
        succeed: "دانلود با موفقیت انجام شد",
        failed: "دانلود ناموفق بود",
      },
      upload: {
        succeed: "آپلود با موفقیت انجام شد",
        failed: "آپلود ناموفق بود",
      },
      sortsub: {
        failed: "مرتب‌سازی ناموفق بود",
      },
    },
    requestConfig: "تنظیمات درخواست",
    cacheConfig: "تنظیمات کش",
    frontEndConfig: "تنظیمات فرانت‌اند",
    githubConfig: "تنظیمات GitHub",
    logsTitle: "لاگ‌های بک‌اند",
    storage: {
      gist: {
        label: "Gist",
        info: 'همگام‌سازی فایل/اشتراک‌ها با Gist در "صفحه همگام‌سازی"',
      },
      manual: {
        label: "دستی",
        info: "",
        desc: "برای جلوگیری از حوادث، قبل از بازیابی داده‌ها، پشتیبان بگیرید.",
        backup: "پشتیبان",
        restore: "بازیابی",
      },
    },
  },

  logsPage: {
    placeholder: {
      keyword: "جستجوی کلمه کلیدی",
      limit: "N لاگ اخیر، پیش‌فرض: {count}",
      refreshInterval: "فاصله (پیش‌فرض {seconds} ثانیه)",
    },
    search: {
      regex: "عبارت منظم",
      ignoreCase: "عدم توجه به بزرگ/کوچکی حروف",
    },
    autoRefresh: "بروزرسانی خودکار",
    refresh: "بروزرسانی",
    clear: "پاک‌کردن",
    copy: "کپی",
    floating: {
      open: "باز کردن لاگ‌های بک‌اند",
      close: "بستن لاگ‌های بک‌اند",
    },
    confirmClear: "آیا از پاک‌کردن لاگ‌های پایدار بک‌اند مطمئن هستید؟",
    empty: "هیچ لاگی وجود ندارد",
    disabled: {
      desc: 'لاگ‌ها به‌طور پیش‌فرض خاموش هستند. برای فعال‌سازی، به "پروفایل من" - "تنظیمات کش" - "حداکثر لاگ‌های ذخیره شده" بروید. این کار باعث خواندن/نوشتن مکرر کش پایدار می‌شود و ممکن است بر عملکرد تأثیر بگذارد.\n\nهمچنین می‌توانید در هر زمان از گوشه بالا سمت راست نوار ناوبری، پنجره لاگ‌ها را باز کنید.',
      alternatives: {
        title: "چگونه لاگ‌ها را در تنظیمات مختلف مشاهده کنیم",
        proxyApp: "برنامه پروکسی: لاگ‌های اسکریپت را در برنامه پروکسی مشاهده کنید",
        docker: "داکر: لاگ‌های کانتینر را مشاهده کنید",
        android: "ماژول اندروید: مسیر /data/adb/sub_store/run را بررسی کنید",
        other: "سایر تنظیمات: مکان لاگ مربوطه را بررسی کنید",
      },
    },
    backendRequired: {
      desc: "نسخه فعلی بک‌اند {currentVersion} است. صفحه لاگ‌ها به نسخه {minVersion} یا بالاتر نیاز دارد. قبل از باز کردن لاگ‌ها، بک‌اند را به‌روز کنید.",
    },
    meta: "نمایش {total}، حداکثر ذخیره {maxCount}",
    selectMode: {
      enter: "انتخاب",
      cancel: "لغو",
      selectedCount: "{count} انتخاب شد",
      selectAll: "انتخاب همه",
      clearAll: "لغو انتخاب همه",
      copy: "کپی انتخاب‌ها",
      empty: "ابتدا لاگ‌ها را انتخاب کنید",
    },
    notify: {
      loadFailed: "بارگذاری لاگ‌ها ناموفق بود",
      clearSucceed: "لاگ‌ها پاک شدند",
      copySucceed: "لاگ‌ها کپی شدند",
      copyFailed: "کپی لاگ‌ها ناموفق بود\n{e}",
      invalidRegex: "عبارت منظم نامعتبر است",
      backendCheckFailed: "تأیید نسخه بک‌اند امکان‌پذیر نیست",
    },
  },

  comparePage: {
    title: "پیش‌نمایش لحظه‌ای",
    remain: {
      title: "گره‌های باقی‌مانده",
      beforeIndicator: "قبل",
      afterIndicator: "بعد",
      indicatorDisabledTips: "داده‌ای برای {side} موجود نیست",
    },
    nodeNames: {
      entry: "همه نام‌ها",
      title: "{side} همه نام‌های گره",
      descriptionBefore:
        "همه نام‌های گره را کپی کنید، یا یک پرامپت برای هوش مصنوعی کپی کنید تا یک اسکریپت عمومی جاوااسکریپت تولید کند، سپس آن را در عملیات اسکریپت بچسبانید تا تغییر نام سفارشی انجام شود. برای پردازش بلادرنگ با هوش مصنوعی، به: ",
      aiLink: "استفاده از هوش مصنوعی برای پردازش گره‌ها",
      copyAll: "کپی همه نام‌ها",
      copyPrompt: "کپی پرامپت",
      copyAllSucceed: "نام‌های گره کپی شدند",
      copyPromptSucceed: "پرامپت کپی شد",
      copyFailed: "کپی ناموفق بود\n{e}",
    },
    divider: "در زیر گره‌های فیلتر شده آمده‌اند",
    filter: {
      title: "گره‌های فیلتر شده",
    },
    tableHead: {
      name: "نام و سرور",
      udp: "UDP",
      "skip-cert-verify": "SCV",
      tfo: "TFO",
      aead: "AEAD",
    },
    nodeInfo: {
      loading: "دریافت اطلاعات گره...",
      loadFailed: "دریافت اطلاعات گره ناموفق بود",
      ipApi: {
        title: "IP-API",
        loading: "بارگذاری جزئیات IP API...",
        loadFailed: "بارگذاری جزئیات IP API ناموفق بود",
        retry: "تلاش مجدد",
      },
      node: {
        title: "اطلاعات گره",
        server: "سرور",
        password: "رمز عبور",
        UUID: "UUID",
      },
    },
  },

  codePage: {
    title: "ویرایشگر",
    des: "ذخیره خودکار هنگام خروج",
  },

  syncPage: {
    title: "همگام‌سازی مصنوعات",
    globalCronTip: "Cron سراسری: {cron}",
    globalCronUnsetTip: "Cron سراسری: تنظیم نشده",
    syncSwitcher: "فعال‌سازی همگام‌سازی",
    syncAllSucceed: "همگام‌سازی با موفقیت انجام شد",
    emptySub: {
      title: "هنوز هیچ مصنوع همگام‌سازی اضافه نکرده‌اید",
      desc: "از طریق Gist می‌توانید در هر جایی به مصنوع دسترسی داشته باشید",
      btn: "افزودن مصنوع",
    },
    detail: {
      firstLine: "نوع: {type}، منبع: {name}",
      secondLine: "آخرین اجرا: {time}",
      notSync: "هنوز اجرا نشده",
    },
    deleteArt: {
      title: "حذف تنظیمات همگام‌سازی",
      desc: "آیا از حذف تنظیمات همگام‌سازی {displayName} مطمئن هستید؟ \nقابل بازیابی نیست!\n\n⚠️ اگر این آیتم قبلاً آپلود شده باشد، تلاش می‌شود فایل‌های gist با نام اصلی و نام رمزگذاری شده حذف شوند.",
      archiveExtra:
        "⚠️ اگر این تنظیمات همگام‌سازی قبلاً آپلود شده باشد، در صورت امکان نام فایل اصلی و نام رمزگذاری شده از gist حذف خواهد شد.",
      succeedNotify: "با موفقیت حذف شد!",
      remotePlaceholderNotice:
        "فایل پیکربندی راه‌دور حذف شد، و یک فایل جای‌گیرنده نگهداری شد تا Gist خالی نشود.",
      remoteDeleteFailedNotice:
        "تنظیمات همگام‌سازی حذف شد، اما حذف فایل پیکربندی راه‌دور ناموفق بود. برای جزئیات لاگ‌ها را بررسی کنید.",
      btn: {
        confirm: "حذف",
        cancel: "لغو",
      },
    },
    copyNotify: {
      succeed: "لینک Gist با موفقیت کپی شد",
      failed: "کپی لینک Gist ناموفق بود\n{e}",
    },
    addArtForm: {
      title: "افزودن مصنوع همگام‌سازی",
      cancel: "لغو",
      confirm: "افزودن",
      name: {
        label: "نام",
        placeholder: "نام",
        isRequired: "نام الزامی است",
        isExist: "این نام قبلاً استفاده شده است",
        isValid: "نام باید فقط شامل حروف، اعداد، زیرخط و خط تیره باشد",
      },
      displayName: {
        label: "نام نمایشی",
        placeholder: "نام نمایشی",
      },
      source: {
        label: "منبع",
        isRequired: "منبع الزامی است",
        placeholder: "لطفاً یک منبع انتخاب کنید",
      },
      upload: {
        label: "آپلود مصنوع",
        tips: {
          title: "آپلود مصنوع",
          content:
            "نیازمند بک‌اند >= 2.23.16.\n\nهنگامی که فعال باشد، همگام‌سازی زمان‌بندی شده، مصنوع تولید شده را در حافظه همگام‌سازی فعلی مانند Gist آپلود می‌کند.\n\nهنگامی که غیرفعال باشد، همگام‌سازی زمان‌بندی شده فقط تولید مصنوع را اجرا کرده و زمان آخرین اجرا را به‌روز می‌کند. آپلود نمی‌کند و آدرس جدید Gist ایجاد نمی‌کند. از این برای بازنشانی کش‌ها یا اجرای منطق آپلود/پشتیبان سفارشی در اشتراک‌ها/فایل‌ها استفاده کنید، مانند آپلود در Gist دیگر یا پشتیبان‌گیری/بازیابی از طریق WebDAV.\n\nمنابع:\nhttps://t.me/zhetengsha/1428\nhttps://t.me/zhetengsha/5261",
        },
      },
      cron: {
        label: "Cron سفارشی",
        placeholder: "راهنمای ℹ️ سمت چپ را ببینید",
        tips: {
          title: "Cron سفارشی",
          content:
            "نیازمند بک‌اند >= 2.23.18.\n\nمثال: 55 23 * * *\n\nمحیط Node: در صورت تنظیم، این تنظیمات همگام‌سازی به‌طور مستقل بر اساس این cron اجرا می‌شود و دیگر از cron سراسری پیروی نمی‌کند. برای ادامه پیروی از cron سراسری، خالی بگذارید.\n\nمحیط‌های غیر Node: cron سفارشی داخلی اجرا نمی‌شود. از هر روش درخواست زمان‌بندی شده برای راه‌اندازی همگام‌سازی استفاده کنید، مثلاً Shortcuts را برای درخواست GET https://sub.store/api/sync/artifact/name زمان‌بندی کنید. برای مستقل بودن، کلید همگام‌سازی این آیتم را خاموش کرده و فقط به آن درخواست تکیه کنید.",
        },
      },
      includeUnsupportedProxy: {
        label: "شامل پروتکل‌های پشتیبانی نشده",
        tips: {
          title: "شامل پروتکل‌های پشتیبانی نشده",
          content:
            "https://github.com/sub-store-org/Sub-Store/wiki/%E9%93%BE%E6%8E%A5%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",
        },
      },
      prettyYaml: {
        label: "YAML خواناتر",
      },
      platform: {
        label: "پلتفرم هدف",
        isRequired: "پلتفرم هدف الزامی است",
      },
      pop: {
        errorTitle: "ذخیره مصنوع ناموفق بود",
        errorBtn: "تغییر",
      },
      succeedNotify: "مصنوع با موفقیت اضافه شد!",
      submitLoading: "در حال ذخیره...",
    },
    editArtForm: {
      title: "ویرایش مصنوعات همگام‌سازی",
      succeedNotify: "مصنوع با موفقیت ویرایش شد!",
    },
    selectSource: {
      title: "انتخاب منبع",
    },
    preview: {
      title: "Gist Sub-Store",
      content:
        "⚠️ وضعیت آخرین بررسی: {status}.\nبا بروزرسانی تنظیمات، بررسی جدیدی آغاز می‌شود.",
      url: "gist فعلی، آخرین gist است که با موفقیت بررسی شده است.",
      noUrl:
        "پس از بررسی موفق و آپلود تنظیمات همگام‌سازی، می‌توانید gist را مشاهده کنید.",
      cancel: "لغو",
      confirm: "مشاهده Gist",
    },
    download: {
      content:
        "⚠️ این ویژگی فقط فایل‌هایی را به تنظیمات همگام‌سازی اضافه می‌کند که قبلاً در آن نباشند.\nباید منبع را به‌صورت دستی تنظیم کنید.",
      confirm: "بازیابی از Gist",
    },
  },

  sharePage: {
    title: "اشتراک‌گذاری",
    noOriginalTips: "پرش ناموفق بود، بررسی کنید که داده منبع حذف نشده باشد.",
    leftTime: "باقی‌مانده: ",
    leftCount: "تعداد دفعات باقی‌مانده:",
    countUsage: "دفعات استفاده",
    expired: "منقضی شده",
    expiredLabel: "انقضا: ",
    createTimeLabel: "ساخته شده: ",
    magicPathErrorNotify:
      "SUB_STORE_FRONTEND_BACKEND_PATH باید با / شروع شود، لطفاً تنظیمات را بررسی کنید!",
    createShare: {
      expirationMode: {
        label: "حالت انقضا",
        duration: "بر اساس مدت",
        datetime: "بر اساس تاریخ و زمان",
        count: "بر اساس تعداد",
      },
      expiresValue: {
        label: "مدت اعتبار",
        placeholder: "مدت اعتبار را وارد کنید",
        regex: "لطفاً عددی در محدوده 0.01 تا 99999.99 وارد کنید",
        empty: "مدت اعتبار نمی‌تواند خالی باشد",
      },
      expiresUnit: {
        label: "واحد اعتبار",
      },
      exactDatetime: {
        label: "تاریخ و زمان انقضا",
        placeholder: "تاریخ و زمان انقضا را انتخاب کنید",
        empty: "تاریخ و زمان انقضا نمی‌تواند خالی باشد",
        invalid: "لطفاً تاریخ و زمان معتبری وارد کنید",
        confirm: "تأیید",
        cancel: "لغو",
      },
      countValue: {
        label: "تعداد کل استفاده",
        placeholder: "تعداد کل استفاده را وارد کنید",
        regex: "لطفاً عددی صحیح از 1 تا 9007199254740991 وارد کنید",
        empty: "تعداد کل استفاده نمی‌تواند خالی باشد",
      },
      usedCountValue: {
        label: "تعداد استفاده شده",
        placeholder: "تعداد استفاده شده را وارد کنید",
        regex:
          "لطفاً عددی صحیح از 0 تا 9007199254740991 که از کل استفاده بیشتر نباشد وارد کنید",
        empty: "تعداد استفاده شده نمی‌تواند خالی باشد",
      },
      token: {
        label: "توکن سفارشی",
        placeholder: "توکن تصادفی پیش‌فرض",
        reserved: "توکن سفارشی نمی‌تواند UNTITLED باشد",
        isExist: "این توکن برای منبع انتخاب شده قبلاً وجود دارد",
      },
      remark: {
        label: "یادداشت",
        placeholder: "یادداشت",
      },
      displayName: {
        label: "نام نمایشی",
        placeholder: "نامی که به دیگران نشان داده می‌شود را وارد کنید",
      },
      shareUrl: {
        label: "لینک اشتراک",
        placeholder: "لینک اشتراک پس از ذخیره در اینجا ظاهر می‌شود.",
      },
      unit: {
        day: "روز",
        month: "ماه",
        season: "فصل",
        year: "سال",
      },
      copyBtn: "کپی لینک",
    },
    editor: {
      create: {
        submit: "ساخت اشتراک",
        succeedNotify: "اشتراک با موفقیت ساخته شد",
        succeedAndCopyNotify: "اشتراک ساخته شد و لینک کپی شد",
      },
      edit: {
        submit: "ذخیره تغییرات",
        succeedNotify: "اشتراک با موفقیت به‌روز شد",
        succeedAndCopyNotify: "اشتراک به‌روز شد و لینک کپی شد",
      },
      loadFailed: {
        title: "این صفحه اشتراک قابل بارگذاری نیست",
        desc: "بررسی کنید که اشتراک یا آیتم منبع آن هنوز وجود دارد، سپس دوباره تلاش کنید.",
        retry: "تلاش مجدد",
        back: "بازگشت به اشتراک‌ها",
      },
      datetimeBackendRequired: {
        title: "این بک‌اند هنوز از انقضای دقیق پشتیبانی نمی‌کند",
        desc: "نسخه فعلی بک‌اند {currentVersion} است. برای ذخیره تاریخ و زمان دقیق انقضا، به نسخه {minVersion} یا بالاتر ارتقا دهید.",
      },
      datetimeBackendCheckFailed: {
        title: "در حال حاضر نمی‌توان نسخه بک‌اند را تأیید کرد",
        desc: "اتصال فعلی بک‌اند را بررسی کرده و دوباره برای ذخیره تاریخ و زمان دقیق انقضا تلاش کنید.",
      },
      failNotify: "به‌روزرسانی اشتراک ناموفق بود",
    },
    copyShare: {
      succeedNotify: "لینک اشتراک با موفقیت کپی شد!",
    },
    emptyShare: {
      title: "هنوز اشتراکی ایجاد نکرده‌اید",
      desc: "ایجاد و اشتراک‌گذاری کنید، سپس شروع به استفاده کنید.",
      emptyTips:
        "لطفاً به صفحه مدیریت اشتراک‌ها و فایل‌ها بروید تا اشتراک را اضافه کنید",
      btn: "همین حالا بسازید",
    },
    deleteShare: {
      title: "حذف اشتراک",
      desc: "آیا از حذف {displayName} مطمئن هستید؟ قابل بازیابی نیست!",
      succeedNotify: "با موفقیت حذف شد!",
      btn: {
        confirm: "تأیید",
        cancel: "لغو",
      },
    },
    selectMode: {
      enter: "انتخاب",
      cancel: "لغو",
      selectedCount: "{count} انتخاب شد",
      selectAll: "انتخاب همه",
      selectTypeAll: "انتخاب همه {type}",
      selectExpired: "انتخاب منقضی‌شده‌ها",
      clearAll: "لغو انتخاب همه",
      clearTypeAll: "لغو انتخاب همه {type}",
      delete: "حذف",
    },
    batchDelete: {
      title: "حذف اشتراک‌های انتخاب شده",
      desc: "آیا از حذف {count} اشتراک انتخاب شده مطمئن هستید؟ قابل بازیابی نیست!",
      succeedNotify: "اشتراک‌های انتخاب شده با موفقیت حذف شدند!",
      failNotify: "حذف اشتراک‌های انتخاب شده ناموفق بود",
      result: "تعداد حذف شده: {success}، تعداد ناموفق: {failed}",
    },
  },

  archivePage: {
    empty: {
      title: "هنوز آیتم بایگانی شده‌ای وجود ندارد",
      desc: "آیتم‌های بایگانی شده در اینجا ظاهر می‌شوند",
      btn: "بازگشت به خانه",
    },
    liveDelete: {
      title: "حذف",
      desc: "ادامه با {displayName}؟",
      batchDesc: "ادامه با {count} آیتم {type} انتخاب شده؟",
      succeedNotify: "بایگانی شد",
      btn: {
        archive: "بایگانی",
        permanent: "حذف",
      },
    },
    entry: {
      archivedAt: "بایگانی شده: {time}",
      restore: "بازیابی",
      delete: "حذف",
    },
    selectMode: {
      enter: "انتخاب",
      cancel: "لغو",
      selectedCount: "{count} انتخاب شد",
      selectAll: "انتخاب همه",
      selectTypeAll: "انتخاب همه {type}",
      clearAll: "لغو انتخاب همه",
      clearTypeAll: "لغو انتخاب همه {type}",
      restore: "بازیابی",
      delete: "حذف دائمی",
    },
    restore: {
      succeedNotify: "بازیابی با موفقیت انجام شد!",
      failNotify: "بازیابی برخی از آیتم‌های انتخاب شده ناموفق بود",
      result: "تعداد بازیابی شده: {success}، تعداد ناموفق: {failed}",
    },
    delete: {
      title: "حذف دائمی",
      desc: "آیا از حذف دائمی {displayName} مطمئن هستید؟ این عمل قابل بازگشت نیست.",
      batchTitle: "حذف دائمی بایگانی‌های انتخاب شده",
      batchDesc:
        "آیا از حذف دائمی {count} آیتم بایگانی شده انتخاب شده مطمئن هستید؟ این عمل قابل بازگشت نیست.",
      succeedNotify: "با موفقیت حذف شد!",
      failNotify: "حذف دائمی برخی از آیتم‌های انتخاب شده ناموفق بود",
      result: "تعداد حذف شده: {success}، تعداد ناموفق: {failed}",
      btn: {
        confirm: "حذف دائمی",
        cancel: "لغو",
      },
    },
  },

  // صفحه مجموعه آیکون‌ها
  iconCollectionPage: {
    iconCollection: "مجموعه آیکون‌ها",
    iconCollectionPlaceholder: "آدرس مجموعه آیکون‌ها را وارد کنید",
    iconName: "نام آیکون",
    iconNamePlaceholder: "نام آیکون را وارد کنید",
    errorIconCollectionUrlTips: "لطفاً آدرس صحیح را وارد کنید",
    copySuccessTips: "آدرس آیکون کپی شد",
    loadingTitle: "در حال بارگذاری آیکون‌ها",
    loadingDesc: "در حال دریافت مجموعه آیکون‌ها برای اولین بار.",
    emptyCollectionTitle: "هنوز داده‌ای برای آیکون‌ها وجود ندارد",
    emptyCollectionDesc:
      "لطفاً به‌صورت دستی بروزرسانی کنید یا مجموعه آیکون دیگری را انتخاب کنید",
    loadFailedTitle: "بارگذاری آیکون‌ها ناموفق بود",
    loadFailedDesc:
      "اتصال شبکه، پروکسی یا آدرس مجموعه را بررسی کرده و دوباره تلاش کنید.",
    refreshBtn: "بروزرسانی دستی",
    retryBtn: "تلاش مجدد",
    selectCollectionBtn: "انتخاب مجموعه آیکون",
    more: "بیشتر",
    useCustomIconCollection: "استفاده از مجموعه آیکون سفارشی",
    resetDefaultIconCollection: "بازنشانی به پیش‌فرض",
    collectionPicker: {
      title: "انتخاب مجموعه آیکون",
      cancel: "لغو",
      confirm: "تأیید",
    },
  },

  themeSettingPage: {
    themeSettingTitle: "ظاهر",
    auto: "تغییر خودکار",
    light: "حالت روشن",
    dark: "حالت تاریک",
    themePicker: {
      title: "انتخاب تم",
      cancel: "لغو",
      confirm: "تأیید",
    },
  },

  apiSettingPage: {
    apiSettingTitle: "مدیریت بک‌اند",
    apiSettingDesc0: `1. وقتی آدرس سرور بک‌اند https://api.com باشد، سعی می‌شود درخواست https://api.com/api/utils/env برای تأیید در دسترس بودن بک‌اند ارسال شود. اگر نمی‌توانید آدرس بک‌اند را اضافه کنید، ابتدا سعی کنید به این آدرس دسترسی پیدا کنید.`,
    apiSettingDesc1: `2. فرانت‌اند HTTPS نمی‌تواند بک‌اند HTTP غیرمحلی را درخواست کند (برخی مرورگرها همچنین نمی‌توانند به بک‌اند HTTP محلی دسترسی داشته باشند). لطفاً یک پروکسی معکوس پیکربندی کنید یا فرانت‌اند HTTP خود را در شبکه محلی میزبانی کنید.`,
    apiSettingDesc2: `آدرس سرور بک‌اند را اضافه کنید، مانند سرویس بک‌اند ساخته شده روی سرور/NAS/اندروید/پلتفرم ابری. می‌توانید به آموزش راه‌اندازی بک‌اند از XiaoYi مراجعه کنید: `,
    currentApi: {
      title: "بک‌اند فعلی",
    },
    apiList: {
      title: "لیست بک‌اندها",
      desc: "این لیست به‌صورت محلی در مرورگر ذخیره می‌شود. اگر مرورگر/دستگاه خود را تغییر دهید، باید دوباره آن را اضافه کنید. برای تغییر به بک‌اند مربوطه کلیک کنید.",
      defaultName: "پیش‌فرض",
      currentTag: "فعلی",
      copy: "کپی لینک",
      editName: "ویرایش نام",
      saveName: "ذخیره نام",
      cancelEditName: "لغو ویرایش",
      delete: "حذف",
    },
    switchApi: {
      loading: "در حال تغییر...",
    },
    addApi: {
      title: "افزودن اتصال بک‌اند جدید",
      placeholder: {
        name: "نام بک‌اند را وارد کنید، باید یکتا باشد",
        url: "مسیر یا آدرس بک‌اند را وارد کنید",
      },
      errors: {
        nameEmpty: "نام نمی‌تواند خالی باشد",
        nameDuplicate: "این نام قبلاً وجود دارد",
      },
      btn: "افزودن",
      duplicate: {
        title: "نکات",
        content:
          "یک پیکربندی بک‌اند با همان آدرس قبلاً وجود دارد. آیا می‌خواهید به این بک‌اند تغییر دهید؟",
        confirm: "تغییر مستقیم",
        cancel: "بازنویسی و تغییر",
      },
    },
  },

  moreSettingPage: {
    gistUpload: {
      title: "آپلود Gist",
      base64: "کدگذاری Base64",
      plaintext: "متن ساده (بدون توکن GitHub)",
    },
    subProgress: {
      title: "سبک پیشرفت اشتراک",
      hidden: "مخفی",
      background: "نمایش به عنوان پس‌زمینه",
    },
    moreSettingTitle: "تنظیمات بیشتر",
    shareManageTitle: "مدیریت اشتراک‌گذاری",
    archiveTitle: "بایگانی",
    clearData: {
      label: "پاک‌کردن داده‌های بک‌اند",
      title: "پاک‌کردن داده‌های بک‌اند",
      content: "آیا مطمئن هستید؟",
      conform: "تأیید",
      cancel: "لغو",
      succeed: "پاک‌کردن با موفقیت انجام شد",
      failed: "پاک‌کردن ناموفق بود",
    },
    clearFrontEndData: {
      label: "پاک‌کردن داده‌های فرانت‌اند",
      title: "پاک‌کردن داده‌های فرانت‌اند",
      content: "آیا مطمئن هستید؟",
      conform: "تأیید",
      cancel: "لغو",
      succeed: "پاک‌کردن با موفقیت انجام شد",
      failed: "پاک‌کردن ناموفق بود",
    },
    other: "سایر",
    simple: "حالت ساده",
    islr: "کشیدن کارت به راست برای نمایش",
    isIC: "استفاده از رنگ اصلی برای آیکون‌های سفارشی",
    isDefaultIcon: "بازنشانی آیکون پیش‌فرض",
    isShowIcon: "نمایش آیکون",
    isSubItemMenuFold: "جمع کردن منوی آیتم اشتراک",
    isEditorCommon: "تنظیمات رایج صفحه جزئیات",
    editorCommon: {
      title: "تنظیمات رایج صفحه جزئیات",
    },
    editorGrouping: {
      title: "استفاده از گروه‌بندی در صفحات جزئیات",
      editOnly: "فقط صفحات ویرایش",
      disabled: "غیرفعال",
      always: "همیشه",
    },
    manualSubscriptions: {
      title: "اشتراک‌های انتخاب شده به‌صورت دستی",
    },
    editorDisplayMode: {
      expanded: "باز",
      collapsed: "جمع",
      hidden: "مخفی",
    },
    isSimpleReicon: "نمایش دکمه بروزرسانی آیتم‌ها",
    isSimpleShowRemarks: "نمایش یادداشت‌های آیتم‌ها در حالت ساده",
    showFloatingRefreshButton: "نمایش دکمه بروزرسانی شناور",
    createItemPosition: {
      title: "آیتم‌های تازه ایجاد شده",
      top: "در بالای لیست",
      bottom: "در پایین لیست",
    },
    showFloatingAddButton: "نمایش دکمه افزودن شناور",
    displayPreviewInWebPage: "نمایش پیش‌نمایش در صفحه وب",
    invalidShareFakeNode:
      "بازگشت اطلاعات جعلی برای اشتراک نامعتبر (برای جلوگیری از کش شدن)",
    tabBar: 'مخفی‌کردن صفحه "همگام‌سازی"',
    tabBar2: 'مخفی‌کردن صفحه "فایل"',
    tabBar3: 'مخفی‌کردن صفحه "اشتراک‌گذاری"',
    auto2: "کلید تنظیمات بیشتر",
    hostapi: "API بک‌اند سفارشی",
    currentHostApi: "API بک‌اند فعلی",
    yhostapi: "پیش‌فرض: https://sub.store ",
    serverDesc:
      "آدرس سرور بک‌اند را پیکربندی کنید، مانند سرویس بک‌اند راه‌اندازی شده روی VPS یا Render. پس از پیکربندی، Sub-Store را مجدداً راه‌اندازی کنید تا اعمال شود. برای حذف API، از بک‌اند پیش‌فرض اصلی استفاده کرده و آدرس را به‌صورت دستی حذف کرده و روی ذخیره کلیک کنید.",
    InputHostApi: {
      title: "اعتبارسنجی لینک ناموفق بود - لینک نامعتبر",
      content:
        "مرورگرهای اصلی درخواست‌های HTTP را در صفحات HTTPS مسدود کرده‌اند. لطفاً از پروتکل HTTPS استفاده کنید.",
    },
  },

  aboutUsPage: {
    projectInfo: {
      title: "اطلاعات پروژه (لطفاً ستاره 🌟 بدهید)",
      fe: "فرانت‌اند",
      be: "بک‌اند",
      module: "ماژول",
      team: "تیم پروژه",
      scriptTutorial: "اسکریپت‌ها و آموزش‌ها",
      link: "GitHub",
    },
    changelogs: {
      title: "تاریخچه تغییرات",
    },
  },

  ageKey: {
    publicKey: {
      label: "کلید عمومی رمزنگاری age",
      placeholder: "کلید عمومی رمزنگاری age را وارد کنید",
      tips: {
        title: "رمزنگاری خروجی age",
        content:
          "بک‌اند >= 2.24.1\nزمان اجرای برنامه‌های پروکسی ممکن است APIهای مورد نیاز را نداشته باشند؛ تست کامل هنوز انجام نشده است.\nکلید پیکربندی شده در اشتراک یا مصنوع همگام‌سازی اولویت دارد.\nاز آنجایی که خروجی رمزنگاری شده پس از تنظیم به سختی قابل بررسی است، توصیه می‌شود آن را فقط در اشتراک‌ها یا مصنوعات همگام‌سازی پیکربندی کنید.\nبرای تولید کلیدها، روی دکمه سمت راست کلیک کنید.",
      },
    },
    secretKey: {
      label: "کلید خصوصی رمزگشایی age",
      placeholder:
        "AGE-SECRET-KEY-1... یا AGE-SECRET-KEY-PQ-1... را برای استخراج کلید عمومی رمزنگاری age جای‌گذاری کنید",
    },
    helper: {
      open: "تولید",
      title: "راهنما age key",
      type: "نوع",
      generate: "تولید",
      applyPublic: "پر کردن",
      derive: "از کلید خصوصی",
      copyPublic: "کپی",
      copySecret: "کپی",
      close: "بستن",
      clearPublic: "پاک کردن کلید عمومی رمزنگاری age",
      clearSecret: "پاک کردن کلید خصوصی رمزگشایی age",
      copied: "کپی شد",
      filled: "پر شد",
      error: "عملیات age key ناموفق بود",
      tips:
        "فقط کلیدهای native age X25519 و MLKEM768-X25519 پشتیبانی می‌شوند. کلید خصوصی رمزگشایی age تولید شده فقط در این گفتگو نمایش داده می‌شود؛ آن را به‌صورت امن ذخیره کنید. کلید عمومی رمزنگاری age را می‌توان در فیلد پیکربندی برای رمزنگاری خروجی نهایی نوشت.",
    },
  },

  magicPath: {
    title: "پیکربندی اتصال بک‌اند",
    description:
      "نیاز به پیکربندی سفارشی بک‌اند. لطفاً مسیر یا آدرس بک‌اند را وارد کنید",
    descriptionFormatsLabel: "پشتیبانی از سه فرمت:",
    descriptionFormatPath: "پیشوند مسیر (/path)",
    descriptionFormatHost: "میزبان+مسیر (host:port/path)",
    descriptionFormatUrl: "آدرس کامل (http(s)://host:port/path)",
    placeholder: "مسیر یا آدرس بک‌اند را وارد کنید",
    connect: "اتصال",
    skip: "رد شدن",
    info: "می‌توانید بعداً در صفحه «پروفایل من» در بخش «مدیریت بک‌اند» آن را پیکربندی کنید.",
    customInfo:
      "خود میزبانی: مسیر بک‌اند را می‌توان از طریق متغیر محیطی SUB_STORE_FRONTEND_BACKEND_PATH تنظیم کرد.",
    troubleshooting: "می‌توانید به این راهنمای عیب‌یابی مراجعه کنید",
    preview: "پیش‌نمایش",
    inputTypes: {
      path: "حالت فقط مسیر (با استفاده از دامنه فعلی)",
      host: "حالت میزبان+مسیر",
      full: "حالت آدرس کامل",
    },
    success: "اتصال با موفقیت انجام شد!",
    errors: {
      empty: "ورودی نمی‌تواند خالی باشد",
      invalid: "آدرس بک‌اند نامعتبر است",
      connection: "اتصال ناموفق بود، لطفاً صحت ورودی را بررسی کنید",
      urlApiConnection:
        "اتصال به آدرس API مشخص شده در پارامتر URL ناموفق بود. لطفاً صحت آدرس را بررسی کنید",
      urlMagicPathConnection:
        "اتصال به magicpath مشخص شده در پارامتر URL ناموفق بود. لطفاً صحت مسیر را بررسی کنید",
      unknown: "خطای ناشناخته رخ داد",
      portRequired: "فرمت میزبان باید شامل شماره پورت باشد",
    },
  },
};