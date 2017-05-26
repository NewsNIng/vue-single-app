<template>
    <div>
        <mu-appbar title="发布动态">
            <mu-icon-button icon="arrow_back" slot="left" @click='onBackClick' />
            <mu-icon-button icon="send" slot="right" @click='onSend'/>
        </mu-appbar>
        <div class="room">
        <mu-text-field v-model='input' hintText="最多输入100个字符" :errorText="multiLineInputErrorText" @textOverflow="handleMultiLineOverflow" multiLine :rows="5" :rowsMax="8" fullWidth :maxLength="100" />
        </div>
        
        <br/>
        
    </div>
</template>

<script>
export default {
    data () {
    return {
      input: '',
      inputErrorText: '',
      multiLineInput: '',
      multiLineInputErrorText: ''
    }
  },
    methods: {
        onBackClick() {
            this.$router.back()
        },
        handleInputOverflow (isOverflow) {
            this.inputErrorText = isOverflow ? '超过字符限制啦！！' : ''
        },
        handleMultiLineOverflow (isOverflow) {
            this.multiLineInputErrorText = isOverflow ? '超过字符限制啦！！' : ''
        },
        // 发布按钮
        onSend() {
            console.log(this.input)
            this.input = ''
            this.onBackClick()
        }
    }
}
</script>

<style scoped>
    .room{
        padding: 20px 10px;
    }
</style>
