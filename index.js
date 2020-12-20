const chalk = require('chalk');
const readline = require('readline');

const io = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

console.log(chalk.bgCyanBright('\t Leap year checker \n'));

function askQuestionForLeapYear() {
	io.question(
		chalk.magentaBright('Enter your birthday in') +
			chalk.bold(' DD/MM/YYYY format: \n'),
		(date) => {
			const year = parseInt(date.slice(date.lastIndexOf('/') + 1));
			if (
				isNaN(year) ||
				year > parseInt(new Date().toDateString().slice(11)) ||
				year.toString().length !== 4
			) {
				console.log(
					chalk.keyword('red')(
						'\nPlease enter a valid year as number and check the format !'
					)
				);
			} else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
				console.log(
					chalk.keyword('orange')('\nYou were born in a leap year !')
				);
			else
				console.log(
					chalk.keyword('orange')('\nYou were not born in a leap year !')
				);
			io.close();
		}
	);
}

askQuestionForLeapYear();
