<template>
  <div class="container">
    <div class="spacer-m"></div>
    <div class="row">
      <section class="col-md-12">
        <h1>
          <span class="dark">Front-End.</span> Quiz.
        </h1>
        <div class="spacer-m"></div>
        <question v-if="user.name.length > 0 && !finished" :questions="questions" :questionIndex="currentQuestion" :handleAnswer="handleAnswer"></question>
        <register v-else-if="user.name == 0 && !finished" :handleRegister="handleRegister"></register>
        <finished v-else :name="user.name"></finished>
      </section>
    </div>
  </div>
</template>

<script>
import 'whatwg-fetch';
import Register from '@/components/Register';
import Question from '@/components/Question';
import Finished from '@/components/Finished';

export default {
  name: 'quiz',
  components: {
    Question,
    Register,
    Finished
  },
  data () {
    return {
      user: {
        name: '',
        email: ''
      },
      currentQuestion: 0,
      questions: [],
      answers: [],
      finished: false
    }
  },
  methods: {
    handleRegister(name, email) {
      this.getData('/static/data/front-end.json').then((json) => {
        this.questions = json;
        this.user.name = name;
        this.user.email = email;
      });
    },
    getData(url) {
      return new Promise((resolve, reject) => {
        fetch(url)
        .then(function(response) {
          return response.json()
        }).then(function(json) {
          resolve(json);
        });
      });
    },
    handleAnswer(question, answer) {
      this.answers.push({
        question: question,
        answer: answer
      });
      if (this.currentQuestion < (this.questions.length - 1)) {
        setTimeout(() => {
          this.currentQuestion += 1;
        }, 100);
      } else {
        this.endQuiz();
      }
    },
    endQuiz() {
      this.finished = true;
      const outputFileName = `/static/results/${this.email}.json`;
      const finalData = { email: this.user.email, name: this.user.name, answers: this.answers };

      localStorage.setItem(this.user.email, JSON.stringify(finalData));
      console.log(this.allStorage());
    },
    allStorage() {
      var values = [],
          keys = Object.keys(localStorage),
          i = keys.length;

      while ( i-- ) {
        values.push({
          key: keys[i],
          value: localStorage.getItem(keys[i])
        });
      }

      return values;
    }
  }
}
</script>

<style scoped>
  h1 {
    font-size: 28px;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }

  .dark {
    color: #000;
  }
</style>
