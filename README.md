#Tehnology
react, redux, redux-persist, local storage, scss

демо інтернет-магазин, де виводиться кілька товарів і кошик у хедеру.
Товари мають назву, зображення, ціну, і кнопку "У кошик".
У кошику виводиться вартість всіх товарів у ньому. По замовчуванню "Кошик пустий (0 грн)". При добаванні товару у кошик, змінюється кількість товарів у ньому і їх остаточна вартість.
Товари у кошику зберігаються, якшо закрити сторінку і відкрити знову.
Якщо кошик не пустий, він має лінк "Очистити", це видаляє всі товарі і повертає кошик у пустий стан.
Технічні специфікації:
Використовую localStorage для зберігання кошика;
Збірка проекту -- через gulp;
Працює в десктопному Chrome/Firefox, також є адаптив під мобільні девайси.