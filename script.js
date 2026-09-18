const translations = {

    en: {
        home: "Home",
        about: "About",
        skills: "Skills",
        education: "Education",
        languages: "Languages",
        projects: "Projects",
        contact: "Contact",
        resume: "📄 Resume",

        profession: "Professional Accountant",
        heroText: "Accounting, taxation and financial reporting specialist. Experienced in 1C, tax reporting, payroll and business support.",
        viewProjects: "View Projects",

        skillsTitle: "Skills",

        skill1Title: "1C Accounting",
        skill1Text: "Accounting operations and financial records in 1C.",

        skill2Title: "Tax Accounting",
        skill2Text: "Tax calculations, reporting and tax compliance.",

        skill3Title: "Payroll",
        skill3Text: "Payroll calculation, personal income tax and social tax.",

        skill4Title: "Microsoft Excel",
        skill4Text: "Financial calculations, reports and data analysis.",

        skill5Title: "Financial Reporting",
        skill5Text: "Preparation and analysis of financial statements.",

        skill6Title: "Bank Operations",
        skill6Text: "Bank statements, payments and reconciliation."
    },


    uz: {
        home: "Bosh sahifa",
        about: "Men haqimda",
        skills: "Ko‘nikmalar",
        education: "Ta’lim",
        languages: "Tillar",
        projects: "Loyihalar",
        contact: "Aloqa",
        resume: "📄 Rezyume",

        profession: "Professional buxgalter",
        heroText: "Buxgalteriya hisobi, soliqqa tortish va moliyaviy hisobotlar bo‘yicha mutaxassis. 1C, soliq hisobotlari, ish haqi hisob-kitobi va biznesni qo‘llab-quvvatlash bo‘yicha tajribaga ega.",
        viewProjects: "Loyihalarni ko‘rish",

        skillsTitle: "Ko‘nikmalar",

        skill1Title: "1C Buxgalteriya",
        skill1Text: "1C dasturida buxgalteriya operatsiyalari va moliyaviy hisob yuritish.",

        skill2Title: "Soliq hisobi",
        skill2Text: "Soliqlarni hisoblash, soliq hisobotlarini tayyorlash va topshirish.",

        skill3Title: "Ish haqi hisobi",
        skill3Text: "Ish haqi, jismoniy shaxslardan olinadigan daromad solig‘i va ijtimoiy soliq hisob-kitobi.",

        skill4Title: "Microsoft Excel",
        skill4Text: "Moliyaviy hisob-kitoblar, hisobotlar va ma’lumotlarni tahlil qilish.",

        skill5Title: "Moliyaviy hisobot",
        skill5Text: "Moliyaviy hisobotlarni tayyorlash va tahlil qilish.",

        skill6Title: "Bank operatsiyalari",
        skill6Text: "Bank ko‘chirmalari, to‘lovlar va o‘zaro hisob-kitoblarni tekshirish."
    },


    ru: {
        home: "Главная",
        about: "Обо мне",
        skills: "Навыки",
        education: "Образование",
        languages: "Языки",
        projects: "Проекты",
        contact: "Контакты",
        resume: "📄 Резюме",

        profession: "Профессиональный бухгалтер",
        heroText: "Специалист в области бухгалтерского учета, налогообложения и финансовой отчетности. Опыт работы в 1С, налоговой отчетности, расчете заработной платы и сопровождении бизнеса.",
        viewProjects: "Посмотреть проекты",

        skillsTitle: "Навыки",

        skill1Title: "Бухгалтерский учет в 1С",
        skill1Text: "Ведение бухгалтерских операций и финансового учета в 1С.",

        skill2Title: "Налоговый учет",
        skill2Text: "Расчет налогов, подготовка отчетности и соблюдение налоговых требований.",

        skill3Title: "Расчет заработной платы",
        skill3Text: "Расчет заработной платы, НДФЛ и социального налога.",

        skill4Title: "Microsoft Excel",
        skill4Text: "Финансовые расчеты, подготовка отчетов и анализ данных.",

        skill5Title: "Финансовая отчетность",
        skill5Text: "Подготовка и анализ финансовой отчетности.",

        skill6Title: "Банковские операции",
        skill6Text: "Банковские выписки, платежи и сверка расчетов."
    }
};


function changeLanguage(lang) {

    const selectedLanguage = translations[lang];

    if (!selectedLanguage) {
        return;
    }

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function(element) {

        const key = element.getAttribute("data-i18n");

        if (selectedLanguage[key]) {
            element.textContent = selectedLanguage[key];
        }

    });

    localStorage.setItem("portfolioLanguage", lang);


    document.querySelectorAll(".language-switcher button").forEach(function(button) {
        button.classList.remove("active");
    });


    const activeButton = document.querySelector(
        '.language-switcher button[onclick*="' + lang + '"]'
    );

    if (activeButton) {
        activeButton.classList.add("active");
    }
}


document.addEventListener("DOMContentLoaded", function() {

    const savedLanguage =
        localStorage.getItem("portfolioLanguage") || "en";

    changeLanguage(savedLanguage);

});