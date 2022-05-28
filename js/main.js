// const questions = [
//   {
//     //Zero
//     text: 'How can I help you today?',
//     answers: [
//       {
//         text: 'Billing Question',
//         next: 'billing',
//       },
//       {
//         text: 'Make a transfer',
//         next: 'transfer',
//       },
//       {
//         text: 'Update information',
//         next: 'info',
//       },
//     ],
//   },
//   {
//     //One
//     text: 'Billing Question',
//     answers: [
//       {
//         text: 'When will my funds be available?',
//         next: 'funds',
//       },
//       {
//         text: 'Can my late fee be waived?',
//         next: 'lateFee',
//       },
//       {
//         text: 'Stop a payment',
//         next: 'stop',
//       },
//     ],
//   },
//   {
//     //Two
//     text: 'Make a Transfer',
//     answers: [
//       {
//         text: 'Checkings to Savings',
//         next: 'cToS',
//       },
//       {
//         text: 'Savings to Checking',
//         next: 'sToC',
//       },
//       {
//         text: 'Zelle transfer',
//         next: 'zelle',
//       },
//     ],
//   },
//   {
//     //Three
//     text: 'Update Information',
//     answers: [
//       {
//         text: 'Lost or Stolen Card',
//         next: 'stolen',
//       },
//       {
//         text: 'Replacement Card',
//         next: 'replacement',
//       },
//       {
//         text: 'Hours of Operation',
//         next: 'hours',
//       },
//     ],
//   },
//   {
//     //Four
//     text: 'When will my funds be available?',
//     answers: [
//       {
//         text: 'When we feel like it.',
//       },
//     ],
//   },
//   {
//     //Five
//     text: 'Can my late fee be waived?',
//     answers: [
//       {
//         text: 'Lmao, No.',
//       },
//     ],
//   },
//   {
//     //Six
//     text: 'Can I stop a payment?',
//     answers: [
//       {
//         text: 'Information about Stopping a Payment and link to associated form.',
//       },
//     ],
//   },
//   {
//     //Seven
//     text: 'Checkings to Savings',
//     answers: [
//       {
//         text: 'Information about Internal Transfers and link to associated form.',
//       },
//     ],
//   },
//   {
//     //Eight
//     text: 'Savings to Checking',
//     answers: [
//       {
//         text: 'Information about Internal Transfers and link to associated form.',
//       },
//     ],
//   },
//   {
//     //Nine
//     text: 'Zelle Transfer',
//     answers: [
//       {
//         text: 'Information about External Transfers and link to associated form.',
//       },
//     ],
//   },
//   {
//     //Ten
//     text: 'Lost or Stolen Card',
//     answers: [
//       {
//         text: 'Information about Fraud and link to associated form.',
//       },
//     ],
//   },
//   {
//     //Eleven
//     text: 'Replacement Card',
//     answers: [
//       {
//         text: 'Information about Card Replacement and link to associated form.',
//       },
//     ],
//   },
//   {
//     //Twelve
//     text: 'Hours of Operation',
//     answers: [
//       {
//         text: 'We are open Monday - Friday 9am - 6pm, Saturday & Sunday 10am - 5pm.',
//       },
//     ],
//   },
// ];

document.querySelector('.reset').addEventListener('click', reset);

let currentQuestionIndex = 0;
const questionOutput = document.querySelector('.questionArea');
const buttonsOutput = document.querySelector('.answerArea');

async function renderQuestion() {
  const res = await fetch(`/api?index=${currentQuestionIndex}`);
  const question = await res.json();
  questionOutput.textContent = question.text;
  buttonsOutput.textContent = '';

  for (let i = 0; i < question.answers.length; i++) {
    const answer = question.answers[i];
    const button = document.createElement('button');
    button.textContent = answer.text;

    buttonsOutput.appendChild(button);
    button.addEventListener('click', function () {
      switch (answer.next) {
        case 'billing':
          currentQuestionIndex = 1;
          break;
        case 'transfer':
          currentQuestionIndex = 2;
          break;
        case 'info':
          currentQuestionIndex = 3;
          break;

        case 'funds':
          currentQuestionIndex = 4;
          break;
        case 'lateFee':
          currentQuestionIndex = 5;
          break;
        case 'stop':
          currentQuestionIndex = 6;
          break;

        case 'cToS':
          currentQuestionIndex = 7;
          break;
        case 'sToC':
          currentQuestionIndex = 8;
          break;
        case 'zelle':
          currentQuestionIndex = 9;
          break;

        case 'stolen':
          currentQuestionIndex = 10;
          break;
        case 'replacement':
          currentQuestionIndex = 11;
          break;
        case 'hours':
          currentQuestionIndex = 12;
          break;

        case 'transferPage':
          window.location = 'http://localhost:8000/transfer';
          break;
        case 'replacementPage':
          window.location = 'http://localhost:8000/replacement';
          break;
      }
      renderQuestion();
    });
  }
}

renderQuestion();

function reset() {
  location.reload();
}
