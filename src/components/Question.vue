<template>
  <div class="question">
    <div class="question-title">{{questions[questionIndex].title}}</div>
    <div class="spacer-s"></div>
    <div v-if="questions[questionIndex].radio" class="btn-group btn-group-vertical" data-toggle="buttons">
      <label class="btn" v-for="radio in questions[questionIndex].radio">
        <input type="radio" name='answer' :value="radio.value" @change="handleAnswer(questions[questionIndex].title, radio.value)" :checked="answer.length != 0">
        <i class="fa fa-circle-o fa-2x"></i>
        <i class="fa fa-dot-circle-o fa-2x"></i>
        <span>{{radio.value}}</span>
      </label>
    </div>
    <div v-else class="input-group">
      <input type="text" class="form-control" placeholder="Please write your thoughts" v-model="answer">
      <div class="input-group-btn">
        <button type="button" class="btn btn-secondary" @click="handleAnswer(questions[questionIndex].title, answer); answer = '';">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'question',
  data () {
    return {
      answer: ''
    }
  },
  props: [
    'questions',
    'questionIndex',
    'handleAnswer'
  ]
}
</script>

<style scoped>
  .question-title {
    font-size: 22px;
  }

  label input[type="radio"] ~ i.fa.fa-circle-o{
    color: #fff;
    display: inline;
  }
  label input[type="radio"] ~ i.fa.fa-dot-circle-o{
    display: none;
  }
  label input[type="radio"]:checked ~ i.fa.fa-circle-o{
    display: none;
  }
  label input[type="radio"]:checked ~ i.fa.fa-dot-circle-o{
    color: #fff;
    display: inline;
  }
  label:hover input[type="radio"] ~ i.fa {
    color: #fff;
  }
  div[data-toggle="buttons"] label {
    display: inline-block;
    padding: 6px 0px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 2em;
    text-align: left;
    white-space: nowrap;
    vertical-align: top;
    cursor: pointer;
    background-color: none;
    border: 0px solid #c8c8c8;
    border-radius: 3px;
    color: #fff;
    user-select: none;
  }
  div[data-toggle="buttons"] label:active, div[data-toggle="buttons"] label.active {
    box-shadow: none;
  }
  label span {
    font-size: 1.5em;
    margin-left: 5px;
    text-transform: capitalize;
  }
</style>
