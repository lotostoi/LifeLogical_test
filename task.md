# LifeLogical_test
Макет для вёрстки -
https://www.figma.com/file/N3ly1AFTTPZvSHWvk6qLV1/Frontendform-Copy?node-id=0%3A1
У формы поля Name, Email Address, Your Message являются
обязательными.
Поле Upload your files поддерживает как стандартный клик ->
открытие папок на компьютере, так и drag-and-drop
(перетаскивание файла в зону загрузки)
Карта из Google (любой адрес, какой захотите)
Отправка данных подразумевается методом POST асинхронно
Для проверки работоспособности формы Вы можете отправить
содержимое формы по url https://beryl-boggy-ceiling.glitch.me/email
Данные придут на почту, указанную в поле формы
Параметры, ожидаемые бэкендом:
"test_name": <String>,
"test_email": <String>,
"test_message": <String>,
"test_file": <File>
При успешной обработке будет возвращён ответ 200
При ошибке будет возвращён код ответа 400 и причина ошибки