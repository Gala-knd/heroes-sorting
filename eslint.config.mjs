import globals from "globals";

export default [{
    files: ["**/*.js"],
    languageOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        globals: {
            ...globals.node,
            ...globals.jest,
        },
    },
    rules: {
        // Базовые правила оформления
        "semi": ["error", "always"],              // Точка с запятой в конце строк
        "quotes": ["error", "single"],            // Одинарные кавычки
        "indent": ["error", 2],                   // Отступ в 2 пробела
        "comma-dangle": ["error", "always-multiline"], // Запятые в многострочных объектах
        "space-before-function-paren": ["error", "never"], // Пробел перед скобками функций
        "space-infix-ops": "error",                // Пробелы вокруг операторов (например, a + b)
        "eol-last": ["error", "always"],           // Пустая строка в конце файла
        "no-multiple-empty-lines": ["error", { "max": 1 }], // Не больше одной пустой строки подряд
        
        // Правила для обнаружения ошибок
        "no-unused-vars": ["warn"],                // Предупреждение о неиспользуемых переменных
        "no-console": "off",                        // Разрешаем console.log
        "eqeqeq": ["error", "always"],              // Использовать === вместо ==
    },
}];
