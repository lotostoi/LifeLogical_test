<template>
  <div class="about">
    <h1>This is an home page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ipsum iure
      laborum, earum dolor porro sapiente optio ipsam velit expedita modi quae
      est. Dolorem, quasi? Ratione similique repellendus error rerum hic
      reiciendis cupiditate, optio, eum aperiam fugit quos laboriosam ab numquam
      quo exercitationem perspiciatis magni tempora iure quas! Distinctio,
      maiores?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Voluptates earum magni amet autem, sequi nulla molestiae illo tempora
      eligendi quos delectus veritatis reprehenderit, quam ratione dolor porro
      veniam possimus eos! Blanditiis cum incidunt illum nisi dolorem!
    </p>
  </div>
</template>
<style lang ="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  & > p {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: $body-width;
    font-family: $ns;
    line-height: 50px;
    font-size: 2rem;
  }
}
</style>