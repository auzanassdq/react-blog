import React from "react";
import Article from "../Article";
import Banner from "../Banner";

const Welcome = () => {
  return (
    <div>
      <Banner
        backgroundImage={`url(${process.env.PUBLIC_URL}/assets/img/bg-gift.jpg)`}
        title="Latest Blog Posts"
        subTitle="Read and get updated on how we progress."
      />

      <main class="main-content bg-gray">
        <div class="row">
          <div class="col-12 col-lg-6 offset-lg-3">
            <Article />

            <nav class="flexbox mt-50 mb-50">
              <a class="btn btn-white disabled">
                <i class="ti-arrow-left fs-9 mr-4"></i> Newer
              </a>
              <a class="btn btn-white" href="#">
                Older
                <i class="ti-arrow-right fs-9 ml-4"></i>
              </a>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Welcome;
