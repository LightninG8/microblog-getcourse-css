(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const imgLinks = {
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
  });
})();
