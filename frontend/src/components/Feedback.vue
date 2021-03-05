<template>
  <from class="feedback">
    <h3>Leave us a message</h3>
    <div class="form-body">
      <div class="fields">
        <label for="name">
          <span>Name *</span>
          <input type="text" name="name" id="name" />
        </label>
        <label for="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address *"
          />
        </label>
        <label for="name">
          <textarea
            name="message"
            id="message"
            placeholder="Your Message *"
          ></textarea>
        </label>
      </div>
      <div class="files">
        <h4>Upload your files</h4>
        <div class="load-area">
          <input type="file" id="load-file" name="file" multiple />
          <div class="folder">
            <img src="@/assets/img/folder.svg" alt="folder" />
          </div>
          <p>Drag your files here.</p>
          <p>Maximum size: 2mb</p>
        </div>
      </div>
    </div>
    <button>Send</button>
  </from>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
    &:hover {
      background-color: darken($base-color, 10%);
    }
    &:active {
      transform: scale(0.98);
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
      & > input {
        height: 50px;
        width: 100%;
        border: 1.2px solid #b4bec8;
        box-sizing: border-box;
        border-radius: 4px;
        outline: none;
        font-size: 16px;
        padding: 17px 14px;
        @include placeholder {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 22px;
          color: $gray-color;
          opacity: 0.8;
        }
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
        @include placeholder {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 22px;
          color: $gray-color;
          opacity: 0.8;
        }
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
    & > h4 {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 27px;
      margin: 0;
    }
    & > .load-area {
      margin-top: 48px;
      width: 100%;
      background: #f9f9fb;
      border: 1px dashed #d2d7e5;
      box-sizing: border-box;
      border-radius: 16px;
      height: 155px;
      position: relative;
      & > #load-file {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        visibility: hidden;
        z-index: 500;
      }
      & > .folder {
        margin: 47px auto 19px;
        width: 39px;
        height: 32px;
        position: relative;
      }
      & > p {
        margin: 0;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        color: $gray-color;
        margin-bottom: 9px;
      }
    }
  }
}
</style>