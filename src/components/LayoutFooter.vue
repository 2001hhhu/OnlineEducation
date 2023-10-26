<template>
  <footer>
    <div class="footer">
      <div class="footer_wrapper">
        <div class="footer_head">
          <div class="footer_head_title">
            <span>汕头大学</span>
          </div>
        </div>
        <div class="footer_body">
          <div class="footer_body_context">
            <div class="context_com">
              <h4 class="com_title">联系我们</h4>
            </div>
            <ul class="context_detail">
              <li>
                <div class="detail_img_call"></div>
                <div>
                  <p class="detail_title">CALL</p>
                  <p>400-689-1199</p>
                  <p>010-8215-2530</p>
                </div>
              </li>
              <li>
                <div><i class="detail_img_mail"></i></div>
                <div>
                  <p class="detail_title">MAIL</p>
                  <p>bsupport@xuetangx.com</p>
                  <p>creditcourse@xuetangx.com</p>
                </div>
              </li>
              <li>
                <div class="detail_img_clock"><i></i></div>
                <div>
                  <p class="detail_title">WORK TIME</p>
                  <p>工作日</p>
                  <p>9:00-18:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer_foot">
          <div class="text">
            <span style="margin-right: 5px">Copyright 2013-2023</span>

            <a href="#" target="_blank">京ICP备14019655号</a>
            |
            <a href="#" target="_blank">京公网安备 11010802033052号</a>
            <a href="#" target="_blank"> | XXX有限公司</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  min-width: 100%;
  background-color: #2b2e35;
  bottom: 0px;
  .footer_wrapper {
    margin: 0 auto;
    max-width: 80%;
    padding: 28px 0;
    // background-color: #fff;
    font:
      12px 'PingFang Sc',
      DIN-Medium,
      Din;
    color: #c7c8cb;
    .footer_head {
      // background-color: #449e74;
      .footer_head_title span {
        font-size: 30px;
      }
    }
    .footer_body {
      max-width: 80%;
      border-bottom: 1px solid #41434a;
      .footer_body_context {
        padding-bottom: 20px;
        .context_com {
          .com_title::before {
            content: '';
            width: 3px;
            height: 14px;
            background-color: #428cf0;
          }
        }
        .context_detail {
          display: flex;
          li {
            flex: 1;
            display: flex;
            p {
              margin: 0;
            }

            .detail_title {
              font-weight: 600;
              font-size: 12px;
              line-height: 17px;
              letter-spacing: 3px;
              margin-bottom: 4px;
            }
            .detail_img_call {
              &:before {
                content: '';
                display: block;
                width: 56px;
                height: 56px;
                margin-right: 16px;
                background: url('@/assets/phone.png') no-repeat #fff;
                background-size: contain;
              }
            }
            .detail_img_mail {
              &:before {
                content: '';
                display: block;
                width: 56px;
                height: 56px;
                margin-right: 16px;
                background: url('@/assets/mail.png') no-repeat #fff;
                background-size: contain;
              }
            }
            .detail_img_clock {
              &:before {
                content: '';
                display: block;
                width: 56px;
                height: 56px;
                margin-right: 16px;
                background: url('@/assets/clock.png') no-repeat #fff;
                background-size: contain;
              }
            }
          }
        }
      }
    }
    .footer_foot {
      padding: 24px;
      .text {
        a {
          color: #c7c8cb;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
