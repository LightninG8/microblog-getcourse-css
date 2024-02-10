(() => {
    const imgLinks = {
      // Инструкция
      759224758: 'https://fs.getcourse.ru/fileservice/file/download/a/659750/sc/199/h/4c049f4a86a9aafda3144f79b3e89024.png',

      // Книги
      842924887: 'https://fs.getcourse.ru/fileservice/file/download/a/659750/sc/375/h/acb62a262e17c9eca9e30fd1f0df57c1.png',

      // Банк
      851445772: 'https://fs.getcourse.ru/fileservice/file/download/a/659750/sc/211/h/ce6c52761358744d87c4ebf40fde528e.png',

      // Геймификаця продаж
      851045926: 'https://fs.getcourse.ru/fileservice/file/download/a/659750/sc/179/h/71b711fd7be0bf3605c1aa789f2f3120.png',

      // Фишки
      851045934: 'https://fs.getcourse.ru/fileservice/file/download/a/659750/sc/435/h/c41a1a3b9280cdcceac2df5dced99689.png',

      // Игровые авто-воронки
      851445785: 'https://fs.getcourse.ru/fileservice/file/download/a/659750/sc/37/h/1e872e3ef8451a7614988f667285e4c9.png',

      // Геймификация рекламы
      851445787: 'https://fs.getcourse.ru/fileservice/file/download/a/659750/sc/296/h/01afcf36b1bbc2b1a0c94b0fb01c8251.png',

      // Геймификация продукта
      851445790: 'https://fs.getcourse.ru/fileservice/file/download/a/659750/sc/157/h/de76f5d87641cc104d67c449c273d53c.png',

      // Записи
      851445797: 'https://fs.getcourse.ru/fileservice/file/download/a/659750/sc/492/h/20b79c63028933710a0c0aae8806b800.png',

      759224758:
        "https://fs.getcourse.ru/fileservice/file/download/a/659750/sc/15/h/d843b56f026e370b6289882a76f4e305.png",
      759224760:
        "https://fs.getcourse.ru/fileservice/file/download/a/659750/sc/251/h/a33e094477ff3acbb58e71b9b1d33e99.png",
      759224761:
        "https://fs.getcourse.ru/fileservice/file/download/a/659750/sc/197/h/30d255b4f9fa19974ec3e6362ec6cd02.png",
      759224762:
        "https://fs.getcourse.ru/fileservice/file/download/a/659750/sc/123/h/5d593e61c8bd88efd8040788167d6a45.png",
      759224763:
        "https://fs.getcourse.ru/fileservice/file/download/a/659750/sc/235/h/c8b4ec5f65260b0367feaa6e0dc35524.png",
      759224765:
        "https://fs.getcourse.ru/fileservice/file/download/a/659750/sc/127/h/08165688ea6b41dca02471b70d10fd0d.png",
      759224767:
        "https://fs.getcourse.ru/fileservice/file/download/a/659750/sc/164/h/90781d364acba14fbda395bd11d12001.png",
      759224770:
        "https://fs.getcourse.ru/fileservice/file/download/a/659750/sc/189/h/1a78061fef9cdb11152a7442bc975d4d.png",
    };
    $(".stream-table tbody tr td a").each((i, el) => {
      const id = $(el).parent().parent().data('training-id');

      console.log(id);
      $(el).empty();
      $(el).prepend(`<img class="training-image" src="${imgLinks[id]}">`);
    });
})();
