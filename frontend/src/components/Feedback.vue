<template>
  <section class="contacts">
    <h1>Get In Touch</h1>
    <form class="feedback">
      <h3>Leave us a message</h3>
      <div class="form-body">
        <div class="fields">
          <label for="name" v-for="field in fields" :key="field.name">
            <span v-if="field.title">Name *</span>
            <input
              v-if="field.tagName === 'input'"
              :type="field.type"
              :name="field.name"
              :id="'#' + field.name"
              :placeholder="field.placeholder"
              v-model="field.value"
              @input="valid(field)"
              :class="
                startValid && field.isValid
                  ? 'saccess'
                  : startValid && !field.isValid
                  ? 'error'
                  : ''
              "
            />
            <textarea
              v-else
              :type="field.type"
              :name="field.name"
              :id="'#' + field.name"
              :placeholder="field.placeholder"
              v-model="field.value"
              @input="valid(field)"
              :class="
                startValid && field.isValid
                  ? 'saccess'
                  : startValid && !field.isValid
                  ? 'error'
                  : ''
              "
            ></textarea>
            <small v-if="startValid && !field.isValid">
              {{ field.errorMessage }}</small
            >
          </label>
        </div>
        <div class="files">
          <h4>Upload your files</h4>
          <div
            class="load-area"
            @dragenter.prevent="readyDrop"
            @dragleave.prevent="stopDrop"
            @drop.prevent="drop($event)"
            :class="statusDrop ? 'active' : ''"
          >
            <input
              type="file"
              id="load-file"
              name="test_file[]"
              multiple="multiple"
              @input="loadFiles($event)"
            />
            <transition v-if="!statusDrop" name="top-bot">
              <div class="folder"></div>
            </transition>

            <div v-else class="icon-load">
              <i class="fa fa-download"></i>
            </div>
            <p v-if="!statusDrop">Drag your files here.</p>
            <p v-if="!statusDrop">Maximum size: 2mb</p>
          </div>

          <div v-if="filesForShow.length" class="files">
            <div v-for="(file, i) in filesForShow" :key="i" class="file">
              <i class="fa fa-file-image-o icon"></i>
              <span class="name">{{ catString(file.name) }}</span>
              <span class="size">{{ bytesToSize(file.size) }}</span>
              <i
                class="fa fa-trash del"
                @click.prevent="delFile(file)"
                :disabled="disabled"
              ></i>
            </div>
          </div>
        </div>
      </div>
      <button
        @click.prevent="sentForm"
        :disabled="disabled"
        :class="{ block: disabled }"
      >
        <div v-if="disabled" class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span v-else>Send</span>
      </button>
    </form>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import { catString, bytesToSize } from "@/functions/functions";
import { sendEmail } from "@/api/api";
export default {
  data() {
    return {
      startValid: false,
      statusDrop: false,
      filesForShow: [],
      files: null,
      disabled: false,
      fields: [
        {
          name: "test_name",
          errorMessage: "Minimum length name is 2",
          type: "text",
          tagName: "input",
          regExp: ["^[а-яА-ЯёЁA-z ]{2,}$", "i"],
          title: "Name *",
          placeholder: "",
        },
        {
          name: "test_email",
          errorMessage: "Required format : xxx@xxx.xx",
          type: "email",
          tagName: "input",
          regExp: [
            "^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$",
          ],
          placeholder: "Email Address *",
        },
        {
          name: "test_message",
          errorMessage: "Minimum length message is 2",
          type: "text",
          tagName: "textarea",
          regExp: ["^[?!,.а-яА-ЯёЁA-z1-9 ]{2,}$", "i"],
          placeholder: "Your Message *",
        },
      ],
    };
  },
  mounted() {
    this.initForm();
  },

  methods: {
    initForm() {
      this.fields = this.fields.map((field) => ({
        ...field,
        isValid: false,
        value: "",
      }));
      this.filesForShow = [];
      if (this.files instanceof DataTransfer) {
        this.files.items.clear();
      } else {
        this.files = new DataTransfer();
      }
      this.startValid = false;
      this.$el.querySelector(".feedback").reset();
    },

    valid(field) {
      if (new RegExp(...field.regExp).test(field.value)) {
        field.isValid = true;
      } else {
        field.isValid = false;
      }
    },

    async sentForm() {
      try {
        this.startValid = true;
        if (!this.isValidForm) return;
        this.disabled = true;
        const result = await sendEmail(
          new FormData(this.$el.querySelector(".feedback"))
        );
        if (result) {
          this.initForm();
          this.addMessage({
            timeout: 3000,
            text: "Message sent successfully",
            type: "success",
          });
        } else {
          this.addMessage({
            timeout: 3000,
            text: "Error on server",
          });
        }
        this.disabled = false;
      } catch (e) {
        console.log(e);
        this.addMessage({
          timeout: 3000,
          text: "Error sending message",
        });
        this.disabled = false;
      }
    },

    readyDrop() {
      this.statusDrop = true;
    },
    stopDrop() {
      this.statusDrop = false;
    },

    drop(e) {
      const newFiles = Object.values(e.dataTransfer.files);
      this.changeColection(newFiles);
      const colection = this.$el.querySelector("#load-file");
      if (this.files.files.length > 1) {
        colection.files = this.files.files;
      }
      this.filesForShow = this.getFiles(colection.files);
      this.statusDrop = false;
    },

    loadFiles(e) {
      const newFiles = Object.values(e.target.files);
      this.changeColection(newFiles);
      if (this.files.files.length > 1) {
        e.target.files = this.files.files;
      }
      this.filesForShow = this.getFiles(this.files.files);
    },

    getFiles(colection) {
      return Object.values(colection).map((file) => {
        return { name: file.name, size: file.size };
      });
    },

    delFile(file) {
      const colection = this.$el.querySelector("#load-file");
      const newColection = Object.values(this.files.files).filter(
        (f) => f.name !== file.name
      );
      this.files.items.clear();
      newColection.forEach((file) => this.files.items.add(file));
      colection.files = this.files.files;
      this.filesForShow = this.getFiles(colection.files);
    },

    changeColection(newFiles) {
      newFiles.forEach((file) => {
        if (file.size > 1048576 * 2) {
          this.addMessage({
            timeout: 3000,
            text: `File ${this.catString(file.name)} more then 2MB`,
          });
        } else {
          const files = Object.values(this.files.files);
          if (!files.find((f) => f.name == file.name)) {
            this.files.items.add(file);
          }
        }
      });
    },

    catString(string) {
      return catString(string);
    },

    bytesToSize(bytes) {
      return bytesToSize(bytes);
    },

    ...mapActions({
      addMessage: "alerts/add",
    }),
  },

  computed: {
    isValidForm() {
      return this.fields.every((field) => field.isValid);
    },
  },
};
</script>


<style lang="scss">
.contacts {
  width: 100%;
  max-width: calc(#{$body-width} - 50px);
  min-height: 638px;
  background: #ffffff;
  box-shadow: 2px 10px 28px rgba(75, 0, 129, 0.12);
  border-radius: 10px;
  padding: 60px;
  box-sizing: border-box;
  & > h1 {
    font-family: $ns;
    display: flex;
    width: 100%;
    max-width: 147px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: 0.01em;
    color: $base-color;
    margin: 0 auto;
    position: relative;
    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 160px;
      height: 2px;
      background: $base-color;
      border-radius: 2px;
    }
  }
}

.feedback {
  display: flex;
  flex-direction: column;
  & > h3 {
    margin-top: 50px;
    display: flex;
    justify-content: flex-start;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 27px;
    color: $dark-color;
    font-family: $ns;
  }
  & > button {
    margin-top: 40px;
    cursor: pointer;
    width: 100%;
    max-width: 422px;
    height: 50px;
    background-color: $base-color;
    border-radius: 4px;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: $light-color;
    transition: background-color 0.3s, transform 0.3s;
    font-family: $ns;
    &:hover {
      background-color: darken($base-color, 10%);
    }
    &:active {
      transform: scale(0.98);
    }
  }
  & > button.block {
    cursor: not-allowed;
    background-color: darken($gray-color, 10%);
    &:hover {
      background-color: darken($gray-color, 10%);
    }
    &:active {
      transform: scale(1);
    }
  }
}

.form-body {
  display: flex;
  justify-content: space-between;
  & > .fields {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 422px;
    & > label {
      display: flex;
      width: 100%;
      position: relative;
      margin-bottom: 24px;
      box-sizing: border-box;
      flex-direction: column;
      & > small {
        padding: 5px;
        display: flex;
        justify-self: flex-start;
        color: $error-color;
      }
      & > input {
        height: 50px;
        width: 100%;
        border: 1.2px solid #b4bec8;
        box-sizing: border-box;
        border-radius: 4px;
        outline: none;
        font-size: 16px;
        padding: 17px 14px;
        font-family: $ns;
        @include placeholder {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 22px;
          color: $gray-color;
          opacity: 0.8;
        }
      }
      & > input.error {
        -webkit-box-shadow: 0px 0px 5px 0px rgba(255, 0, 0, 1);
        -moz-box-shadow: 0px 0px 5px 0px rgba(255, 0, 0, 1);
        box-shadow: 0px 0px 5px 0px rgba(255, 0, 0, 1);
      }

      & > span {
        position: absolute;
        display: block;
        padding: 0 5px;
        background-color: white;
        top: -7px;
        left: 10px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: $dark-color;
        font-family: $ns;
      }
      & > textarea {
        width: 100%;
        border: 1.2px solid #b4bec8;
        box-sizing: border-box;
        border-radius: 4px;
        outline: none;
        display: flex;
        min-height: 137px;
        padding: 17px 14px;
        font-size: 16px;
        font-family: $ns;
        @include placeholder {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 22px;
          color: $gray-color;
          opacity: 0.8;
        }
      }
      & > input.error,
      & > textarea.error {
        border-color: $error-color;
        color: $error-color;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(255, 0, 0, 1);
        -moz-box-shadow: 0px 0px 5px 0px rgba(255, 0, 0, 1);
        box-shadow: 0px 0px 5px 0px rgba(255, 0, 0, 1);
      }
      & > input.saccess,
      & > textarea.saccess {
        border-color: $base-color;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(74, 153, 211, 1);
        -moz-box-shadow: 0px 0px 5px 0px rgba(74, 153, 211, 1);
        box-shadow: 0px 0px 5px 0px rgba(74, 153, 211, 1);
      }
    }
    & > label:last-of-type {
      margin-bottom: 0;
    }
  }
  & > .files {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 306px;
    border: 1px solid #b4bec8;
    padding: 31px 23px 23px 23px;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 20px;
    & > h4 {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 27px;
      margin: 0;
      font-family: $ns;
    }

    & > .load-area {
      cursor: pointer;
      margin-top: 48px;
      width: 100%;
      background: #f9f9fb;
      border: 1px dashed #d2d7e5;
      box-sizing: border-box;
      border-radius: 16px;
      height: 155px;
      position: relative;
      transition: transform 0.3s;
      &:hover {
        background-color: darken(#f9f9fb, 5%);
        border-width: 2px;
        border-color: $dark-color;
      }
      &:active {
        background-color: darken(#f9f9fb, 5%);
        transform: scale(0.9);
      }
      & > #load-file {
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 500;
        opacity: 0;
      }
      & > .icon-load {
        margin: 47px auto 19px;
        width: 50px;
        position: relative;
        animation: top-bot 1s linear infinite;
        & > i {
          display: flex;
          font-size: 50px;
          color: transparentize($base-color, 0.5);
        }
      }

      & > .folder {
        cursor: pointer;
        margin: 47px auto 19px;
        width: 39px;
        height: 32px;
        position: relative;
        border: none;
        outline: none;
        background: url("~@/assets/img/folder.svg") no-repeat;
        background-size: cover;
        &:hover {
          transform: scale(1.05);
        }
        &:active {
          transform: scale(0.99);
        }
      }
      & > p {
        margin: 0;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        color: $gray-color;
        margin-bottom: 9px;
        font-family: $ns;
      }
    }
    & > .load-area.active {
      background-color: darken(#f9f9fb, 5%);
      border-width: 2px;
      border-color: $dark-color;
    }
    & > .files {
      display: flex;
      margin-top: 10px;
      flex-direction: column;
      width: 100%;
      & > .file {
        width: 100%;
        justify-content: flex-start;
        display: flex;
        padding: 5px;
        align-items: center;
        & > .name {
          display: flex;
          width: 100px;
          margin-left: 10px;
        }
        & > .name {
          display: flex;
          margin-left: 20px;
        }
        & > .del {
          cursor: pointer;
          margin-left: auto;
          margin-right: 10px;
          color: $base-color;
          font-size: 18px;
          &:hover {
            color: $error-color, 20%;
          }
          &:active {
            transform: scale(0.9);
          }
        }
      }
    }
  }
}

@include mq(768, max) {
  .contacts {
    width: 100%;
    max-width: calc(#{$body-width} - 50px);
    min-height: 638px;
    background: #ffffff;
    box-shadow: 2px 10px 28px rgba(75, 0, 129, 0.12);
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
  }
}

@include mq(768, max) {
  .feedback {
    & > h3 {
      justify-content: center;
    }
    & > button {
      max-width: 100%;
    }
  }

  .form-body {
    justify-content: center;
    flex-wrap: wrap;
    & > .fields {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 100%;
    }
    & > .files {
      width: 100%;
      max-width: 100%;
      margin-top: 20px;
      margin-left: 0;
    }
  }
}

@keyframes f-leave {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes f-enter {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.leave {
  animation: f-leave 0.3s linear forwards;
}
.enter {
  animation: f-enter 0.3s linear forwards;
}

@keyframes top-bot {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-5px);
  }
  75% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 30px;
  height: 25px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 24px;
  height: 24px;
  margin: 2px;
  border: 2px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@include mq($hover-off, max) {
  .feedback {
    & > button {
      &:hover {
        background-color: $base-color;
      }
      &:active {
        transform: scale(0.98);
      }
    }
    & > button.block {
      cursor: not-allowed;
      background-color: darken($gray-color, 10%);
      &:hover {
        background-color: darken($gray-color, 10%);
      }
      &:active {
        transform: scale(1);
      }
    }
  }
}
</style>