<template>
  <div class="page-about">
    <h1>This is an about page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ipsum iure
      laborum, earum dolor porro sapiente optio ipsam velit expedita modi quae
      est. Dolorem, quasi? Ratione similique repellendus error rerum hic
      reiciendis cupiditate, optio, eum aperiam fugit quos laboriosam ab numquam
      quo exercitationem perspiciatis magni tempora iure quas! Distinctio,
      maiores?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p>
  </div>
</template>
<style lang ="scss" scoped>

.page-about {
  display: flex;
  width: 100%;
  max-width: calc(#{$body-width} - 50px);
  padding: 100px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: transparentize($base-color,0.9);
  border-radius: 20px;
  box-sizing: border-box;
  & > h1 {
    display: flex;
    justify-self: center;
    font-size: 1.8rem;
  }
  & > p {
    display: flex;
    justify-content: center;
    width: 100%;
    font-family: $ns;
    line-height: 50px;
    font-size: 20px;
  }
}

@include mq(1024, max) {
  .page-about {
    display: flex;
    width: 100%;
    max-width: calc(#{$body-width} - 50px);
    padding: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: transparentize($base-color, 0.9);
    border-radius: 20px;
    box-sizing: border-box;
    & > h1 {
      display: flex;
      justify-self: center;
      font-size: 1.5rem;
    }
    & > p {
      display: flex;
      justify-content: center;
      width: 100%;
      font-family: $ns;
      line-height: 50px;
      font-size: 15px;
    }
  }
}
</style>
