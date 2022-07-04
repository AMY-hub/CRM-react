class ExampleItem {
    constructor( name, phone, email, product, status ) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.product = product;
        this.status = status;
    }
}

const exampleData = [
    new ExampleItem( 'Алексей Иванов', 89206548017, 'mailto@yandex.ru', 'course-html', 'new' ),
    new ExampleItem( 'Анна Лиманова', 89531538022, 'ali1993@yandex.ru', 'course-js', 'new' ),
    new ExampleItem( 'Сергей Огольцов', 89345560789, 'ogolets@yandex.ru', 'course-vue', 'new' ),
    new ExampleItem( 'Рената Столиева', 89204235015, 'stoli@yandex.ru', 'course-php', 'new' ),
    new ExampleItem( 'Захар Еремцев', 89602351077, 'ImHar@yandex.ru', 'course-wordpress', 'new' ),
];

export const getTestData = () => {
    const randomNum = Math.floor(Math.random() * exampleData.length);
    return exampleData[randomNum];
}