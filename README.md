# ajs_7_2

[![Build status](https://ci.appveyor.com/api/projects/status/pws548edkb6uqeej?svg=true)](https://ci.appveyor.com/project/Stanislavsus/ajs-7-2)

**Легенда**

Вам поручили подумать над тем, чтобы реализовать очистку вводимых номеров телефонов в любом формате (например, как на Госуслугах) и приведения к единому формату: +7xxxxxxxxxx (где вместо x - цифры).

Вам нужно подумать - какой инструмент использовать и выбрать оптимальное, на ваш взгляд, решение (не факт, что оно уместиться в одну строку).

**Описание**

Что мы хотим видеть, мы хотим, что ваша функция работала следующим образом:

* 8 (927) 000-00-00 -> +79270000000
* +7 960 000 00 00 -> +79600000000
* +86 000 000 0000 -> +860000000000

В последнем номере нет ошибки, это Китай. А первые два - РФ.

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функций и классов, которые вы тестируете.
