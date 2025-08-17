export const menu: IMenu[] = [
    {
        category: "تذکرات",
        children: [
            { name: "نکات مهم جهت گزینش", route: "" },
            { name: "تذکرات پزشکی", route: "" },
            { name: "وضعیت نظام وظیفه", route: "" },
            { name: "دانشجویان انصرافی", route: "" },
        ]
    },
    {
        category: "تحصیلات",
        children: [
            { name: "رشته های تحصیلی", route: "" }
        ]
    },
    {
        category: "مدارک و اقدامات",
        children: [
            { name: "فرم ها", route: "" },
            { name: "دوره آموزشی در مرکز آموزش ۰۱", route: "" },
            { name: "مدارک", route: "" },
        ]
    },
    {
        category: "آدرس ها",
        children: [
            { name: "محل مراجعه داوطلبان نیروی هوایی", route: "" },
            { name: "محل مراجعه داوطلبان نیروی هوایی", route: "" },
            { name: "محل مراجعه داوطلبان نیروی زمینی", route: "" },
            { name: "محل مراجعه داوطلبان نیروی پدافند هوایی", route: "" },
            { name: " دفاتر استخدام آجا", route: "" },
            { name: "حوزه‌های دیگر", route: "" },
            { name: "بیمارستان های نزاجا", route: "" },
            { name: "دفاتر گزینش و استخدام پدافند هوایی", route: "" },
            { name: "دفاتر منتخب نیروی دریایی راهبردی آجا", route: "" },
        ]
    },
    {
        category: "اقدامات",
        children: [
            { name: "درخواست تاییدیه تحصیلی", route: "" },
            { name: "مشاهده و چاپ اطلاعات", route: "" },
            { name: "اعلام نتیجه ی نهایی", route: "" },
        ]
    },
    {
        category: "راهنمایی ها و کمک",
        children: [
            { name: "فراموشی کد شماره پرونده", route: "" },
            { name: "فراموشی کد رهگیری خرید", route: "" },
            { name: "فراموشی کد داوطلبی", route: "" },
        ]
    },
]

export interface IMenu {
    category: string,
    children: IMenuChild[]
}

export interface IMenuChild {
    name: string,
    route: string
}