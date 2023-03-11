// Задачи OBJECTS:

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

// Пример:

// showExperience(personalPlanPeter) => '1 month'

// P.S. желательно использовать деструктуризацию, но не обязательно

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

// Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

// P.S. Для переноса строки используется \n в конце строки.

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'

// [][][][][][][][][][][][][][][][][]
// const personalPlanPeter = {
// 	name: 'Peter',
// 	age: '29',
// 	skills: {
// 		languages: ['ru', 'eng', 'pl'],
// 		programmingLangs: {
// 			js: '20%',
// 			php: '10%',
// 			python: '80%'
// 		},
// 		exp: '1 month'
// 	}, 
// 	showAgeAndLangs: function(obj) {
// 		let lang = '';
// 		if (obj['skills']['languages'].length !==0) {
// 			obj.skills.languages.forEach((item) => {
// 				return lang += `${item.toUpperCase()} `;
// 			}); 
// 		} else {
// 			lang = 'Не выучил еще';
// 		}
// 		console.log(`Мне ${obj.age} и я владею языками: ${lang}`);
// 		// 'Мне 29 и я владею языками: RU ENG'
// 	}
// };

// function showExperience(obj) {
// 	const {exp} = obj.skills;
// 	return exp;
// }
// function showProgrammingLangs(obj) {
// 	let string = '';
// 	if (Object.keys(obj['skills']['programmingLangs']).length === 0) {
// 		return string += 'no languages';
// 	} else {
// 		for (let key in obj['skills']['programmingLangs']) {
// 			string += `Язык ${key} изучен на ${personalPlanPeter['skills']['programmingLangs'][key]}. \n`;
// 		}
// 		return string;
// 	}    
// }
// [][][][][][][][][][][][][][][][][]

// console.log(showExperience(personalPlanPeter));
// console.log(showProgrammingLangs(personalPlanPeter));
// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// Задачи:

// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль

// lisbon
// rome
// milan
// dublin


// [][][][][][][][][][][][][][][][][]
// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(array) {
// 	let fam = '';
// 	array.forEach((person) => {
// 		return fam += `${person} `;
// 	});
// 	return console.log(`Семья состоит из: ${fam}`);
// }

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(array) {
// 	let string = '';
// 	array.forEach((city) => {
// 		return string += `${city.toLowerCase()} \n`;
// 	});
// 	return console.log(string);
// }
// [][][][][][][][][][][][][][][][][]


// showFamily(family);
// standardizeStrings(favoriteCities);

// Продолжаем решение задач на массивы.

// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

// Пример:

// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'

// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

// Это очень интересная задача, которую можно решить несколькими способами. Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает. Как небольшая подсказка, есть метод, который может вам помочь. И часть дополнительных вариантов решения мы тоже изучим в течении курса.

// Может показать сложной с первого взгляда, но это совсем не так 🙂

// 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

// Пример:

// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:

// Доступные валюты:
// UAH
// RUB
// Заметьте:

// - CNY (юань) исчез из списка валют, значит такая валюта закончилась

// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов

// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку

// [][][][][][][][][][][][][][][][][]
// const someString = 'This is some strange string';
// //========================= reverse each word with positions remained

// function reverseWords(str) {
// 	str = str.split(' ');
// 	reversedArr=[];
	
// 	str.forEach((word) => {
// 		word = word.split('');
// 		let reversedWord = [];
// 		for (let i=word.length-1; i>=0; i--) {
// 			reversedWord.push(word[i]);
// 		}
// 		reversedArr.push(reversedWord.join(''));
// 		return reversedArr;
// 	});

// 	return console.log(reversedArr.join(' '));
// }
// reverseWords(someString);

// //========================= reverse the whole string

// function reverseString(str) {
// 	emptyReversed = [];
// 	for (let i = str.length-1; i>=0; i--) {
// 		emptyReversed.push(str[i]);
// 	}
// 	return console.log(emptyReversed.join(''));
// }
// reverseString(someString);
// // reverse(someString) => 'gnirts egnarts emos si sihT'

// // =========================================
// // ['joe', 'jane', 'mary'].includes('jane')

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY', 'EUR', 'gbp'];

// function prepareDB(base, additional) {
// 	for (let currency of additional) {
// 		if (base.includes(currency)) {
// 			continue;
// 		} else {
// 			base.push(currency.toUpperCase());
// 		}
// 	}
// 	return base;
// }
// prepareDB(baseCurrencies, additionalCurrencies);

// console.log(`currencies from both banks: ${baseCurrencies.join(' ')}`);

// function availableCurr(db, out) {
// 	for (let i = 0; i < db.length; i++) {
// 		if (out == null) {
// 			continue;
// 		} else if (db[i].toUpperCase() === out.toUpperCase()) {
// 			console.log(`${db[i]} is out of stock`);
// 			db.splice(i, 1);
// 		}
// 	}
// 	let outputMessage = '';
// 	db.forEach((curr) => outputMessage += `\n${curr.toUpperCase()}`);
// 	return console.log('Available currencies: ' + outputMessage);
// }

// availableCurr(baseCurrencies, 'rub');
// [][][][][][][][][][][][][][][][][]

// Задача:

// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂

// Но эта задача содержит несколько подзадач внутри:

// + вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;

// + вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;

// + определение того, хватает ли бюджета на оплату такого объема;

// - все числа идут без единиц измерения для упрощения, просто цифры и все;

// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект

// [][][][][][][][][][][][][][][][][][][][][][][][][][]

// const shoppingMallData = {
// 	shops: [
// 		{
// 			width: 10,
// 			length: 5
// 		},
// 		{
// 			width: 15,
// 			length: 7
// 		},
// 		{
// 			width: 20,
// 			length: 5
// 		},
// 		{
// 			width: 8,
// 			length: 10
// 		}
// 	],
// 	height: 5,
// 	moneyPer1m3: 30,
// 	budget: 50000,

// 	calculateTotalSqrArea: function() {
// 		let totalSqrArea = 0;
// 		shoppingMallData['shops'].forEach((shop) => {
// 			let shopSqrArea = 0;
// 			shopSqrArea = shop.width * shop.length;
// 			totalSqrArea +=shopSqrArea;
// 		});
// 		return totalSqrArea;
// 	},
// 	calculateTotalVolume: function(){
// 		let totalVolume = this.calculateTotalSqrArea() * this.height;
// 		return totalVolume;
// 	},
// 	isBudgetEnough: function() {
// 		if (this.calculateTotalVolume() * this.moneyPer1m3 <= this.budget) {
// 			console.log('Бюджета достаточно');
// 		} else {
// 			console.log('Бюджета не достаточно');
// 		}
// 	}
// };

// // console.log(shoppingMallData.calculateTotalSqrArea());
// // console.log(shoppingMallData.calculateTotalVolume());
// shoppingMallData.isBudgetEnough();

// [][][][][][][][][][][][][][][][][][][][][][][][][][]

// Задача:

// У вас есть список учеников, которые хотят поиграть в игру:

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

// Пример:

// sortStudentsByGroups(students)  =>

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]
// А если добавить одного, то:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]
// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Sam', 'Takeshi', 'Hannah'];


function divideGroups() {
	students.sort();
	console.log(students);
	
	studentGroups = [];
	
	let groupCount=0;
	let groupArray=[];

	for (let i = 0; i < students.length; i++) {
		if (groupCount === 3) {
			groupCount = 0;
			studentGroups.push(groupArray);
			groupArray = [];
		}else if (groupCount < 3) {
			groupArray.push(students[i]);
			groupCount += 1;
		} 
	}
	// console.log(studentGroups);
	
	if ((students.length % 3) !== 0) {
		let studentsLeft = students.length % 3;
		lastMessage = `Students left without groups: ${students.splice(students.length - studentsLeft).join(', ')}`;
		studentGroups.push(lastMessage);
	} else {
		lastMessage = 'Students left without groups: -';
		studentGroups.push(lastMessage);
	}
	return studentGroups;
};


console.log(divideGroups());