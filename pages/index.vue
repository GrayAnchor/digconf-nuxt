<template>
  <div>
    <section id="home-hero" class="hero" >
      <div class="hero-content">
        <h1>Dig Conference</h1>
        <h2>10.5.21  |  Baton Rouge, LA</h2>
      </div>
    </section>

    <section id="workshops" class="workshops" >
      <div class="workshops-content" >
        <div class="heading" >
          <h1>Customize your Dig experience</h1>
          <p>Choose from the options below to filter workshops available this year at <b>DIG2020</b>!</p>
        </div>

        <div class="filter">
          <span class="wrap" >
            <input @change="filter.dev=!filter.dev,updateFilter()" id="dev" name="filter" type="checkbox" value="dev" ><label for="dev"><span class="icon" ><img src="~/static/img/icon-dev.svg" alt=""></span><span>Development</span></label>
            <span class="checkmark"></span>
          </span>
          <span class="wrap">
            <input @change="filter.sc=!filter.sc,updateFilter()" id="sc" name="filter" type="checkbox" value="sc" ><label for="sc"><span class="icon" ><img src="~/static/img/icon-sc.svg" alt=""></span><span>Strategy & Content</span></label>
            <span class="checkmark"></span>
          </span>
          <span class="wrap">
            <input @change="filter.design=!filter.design,updateFilter()" id="design" name="filter" type="checkbox" value="design" ><label for="design"><span class="icon" ><img src="~/static/img/icon-design.svg" alt=""></span><span>Design</span></label>
            <span class="checkmark"></span>
          </span>
        </div>

        <!-- Using Tailwind CSS for responsive grid -->
        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-16">
            <div v-for="(workshop, index) in workshops" :key="index" v-if="showAll || show.every(r=> workshop['category'].includes(r))">
              <a  :href="`#workshop-${index}`" class="grid-item"   >
                  <h4>{{ workshop.name }}</h4>
                  <div class="categories">
                    <span v-if="workshop['category'].includes('dev')" class="icon"><img src="~/static/img/icon-dev.svg" alt=""></span>
                    <span v-if="workshop['category'].includes('sc')" class="icon"><img src="~/static/img/icon-sc.svg" alt=""></span>
                    <span v-if="workshop['category'].includes('design')" class="icon"><img src="~/static/img/icon-design.svg" alt=""></span>
                  </div>
              </a>
            </div>
        </div>
      </div>
    </section>

    <section id="events-news" class="events-news" >
      <div class="events-news-content">
        <div class="events">
          <h1>Events</h1>
          <div class="events-container">
            <div v-for="event in events" :key="event.name" class="event">
              <div class="cal">
                <span class="month">{{ event.date.month }}</span>
                <span class="date">{{ event.date.day }}</span>
              </div>
              <div class="details">
                <h2>{{ event.name }}</h2>
                <span class="time" >{{ event.time }}</span>
              </div>
            </div>
          </div>
          <nuxt-link class="link" to="/events">View all</nuxt-link>
        </div>
        <hr>
        <div class="news">
          <h1>News</h1>
          <div class="news-container">
            <div v-for="article in news" :key="article.title" class="article">
              <div class="details">
                <h2>{{ article.title }}</h2>
                <span class="date" >{{ article.date }}</span>
              </div>
            </div>
          </div>
          <nuxt-link class="link" to="/events">View all</nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  height: 695px;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(~/static/img/img-btr-skyline.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  border-bottom: 1px solid white;
  @include screen(sm) {
    height: 95vh;
  }
  .hero-content {
    max-width: $maxWLg;
    width: 100%;
    padding-top: 8rem;
    h1 {
      font-size: $font3xl;
      font-weight: bold;
      letter-spacing: .075em;
      color: white;
      text-transform: uppercase;
      line-height: 1.1;
      margin-bottom: 2rem;
      @include screen(md){
        font-size: $font2xl;
      }
    }
    h2 {
      font-size: $fontLg;
      font-weight: bold;
      letter-spacing: .075em;
      color: $orange;
      text-transform: uppercase;
    }
  }
}

.workshops {
  width: 100%;
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
  .workshops-content {
    max-width: $maxWLg;
    width: 100%;
    .heading {
      margin-bottom: 4rem;
      h1 {
        font-size: $fontXl;
        color: white;
        font-weight: bold;
        letter-spacing: 0.075em;
        text-transform: uppercase;
      }
      p {
        font-size: $fontSm;
        color: white;
      }
    }
    .filter {
      width: 100%;
      padding-top: 2rem;
      padding-bottom: 2rem;
      padding-left: 7rem;
      padding-right: 7rem;
      margin-bottom: 4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: $orange;
      @include screen(lg) {
        flex-direction: column;
        align-items: start;
        span.wrap {
          margin-bottom: 2rem;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      @include screen(sm) {
        padding-left: 2rem;
      }
      span.wrap {
        display: flex;
        align-items: center;
        position: relative;
        color: white;
        font-weight: bold;
        letter-spacing: 0.075em;
        text-transform: uppercase;
        padding-left: 4rem;
        input {
          position: absolute;
          opacity: 0;
          height: 1.9rem;
          width: 1.9rem;
          left: 0;
          top: .5rem;
          z-index: 10;
          cursor: pointer;

          &:checked ~ .checkmark:after {
          display: block;
          }
          &:checked ~ .checkmark {
            background-color: white;
          }
        }
        .checkmark { //Custom checkbox styles
          position: absolute;
          top: .5rem;
          left: 0;
          height: 1.9rem;
          width: 1.9rem;
          border-radius: 0.5rem;
          background-color: white;
          cursor: pointer;
        }
        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
          left: 6px;
          top: 2px;
          width: 8px;
          height: 14px;
          border: solid $blue;
          border-width: 0 4px 4px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
        
        label {
          display: flex;
          cursor: pointer;
          align-items: center;
          span.icon {
            margin-right: 1rem;
            flex-shrink: 0;
            width: 2.7rem;
            
            @include screen(sm) {
              align-self: start;
              margin-top: .5rem;
            }
          }
        }
      }
    }
    .grid {
      .grid-item {
        height: 226px;
        background: linear-gradient(90deg, #4D2E90 0%, #EC297B 60%, #EE4747 75%, #F05A28 95%);
        border-radius: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        transition-property: transform;
        transition-duration: 200ms;
        transition-timing-function: linear;
        &::before {
          position: absolute;
          content: '';
          border-radius: 1.2rem;
          width: 100%;
          height: 100%;
          top: 0; 
          left: 0;
          background: linear-gradient(90deg,  #F05A28 0%, #EE4747 20%, #EC297B 95%);
          opacity: 0;
          transition-property: opacity;
          transition-duration: 200ms;
          transition-timing-function: ease-in-out;
        }
        &:hover {
          transform: scale(1.05);
          transition-property: transform;
          transition-duration: 200ms;
          transition-timing-function: ease-in;
        }
        &:hover::before {
          opacity: 1;
          transition-property: opacity;
          transition-duration: 400ms;
          transition-timing-function: ease-in-out;
        }

        h4 {
          position: relative;
          font-weight: bold;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.075rem;
        }
        .categories {
          position: absolute;
          display: flex;
          align-items: center;
          bottom: 2rem;
          right: 2rem;
          span.icon {
            margin-right: 1rem;
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
}

.events-news {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  border-bottom: 1px solid white;
  .events-news-content {
    max-width: $maxWLg;
    width: 100%;
    display: flex;
    justify-content: space-between;
    @include screen(md){
      flex-direction: column;
    }
    .events {
      padding-top: 6rem;
      padding-bottom: 6rem;
      padding-right: 4rem;
      display: flex;
      flex-direction: column;
      flex: 1;
      color: white;
      @include screen(md){
        padding-right: 0;
      }
      h1 {
        font-size: $fontXl;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.075em;
      }
      &-container {
        display: flex;
        flex-direction: column;
        .event {
          display: flex;
          align-items: center;
          cursor: pointer;
          padding-top: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid $lightBlue;
          transition-property: background-color;
          transition-duration: 200ms;
          &:last-child {
            border-bottom: none;
          }
          &:hover .cal{
            background: linear-gradient(90deg, #4D2E90 0%, #EC297B 60%, #EE4747 75%, #F05A28 95%);
            color: white;
          }
          .cal {
            width: 7rem;
            height: 7rem;
            flex: none;
            background: white;
            border-radius: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-right: 3rem;
            color: $blue;
            line-height: 1;
            
            .month {
              font-size: $fontMonth;
              text-transform: uppercase;
              letter-spacing: 0.075rem;
            }
            .date {
              font-size: $fontDate;
              font-weight: bold;
            }
          }
          .details {
            h2 {
              font-weight: bold;
              letter-spacing: 0.075em;
            }
            .time {
              font-size: $fontSm;
            }
          }
        }
      }
      .link {
            font-weight: bold;
            letter-spacing: 0.075em;
            margin-left: auto;
            &:hover {
              background: linear-gradient(90deg, #4D2E90 0%, #EC297B 60%, #EE4747 75%, #F05A28 95%);
              color: orange;
              transition-property: color;
              transition-duration: 200ms;
              -webkit-text-fill-color: transparent;
              -webkit-background-clip: text;
            }
          }
    }
    .news {
      padding-top: 6rem;
      padding-bottom: 6rem;
      padding-left: 4rem;
      display: flex;
      flex-direction: column;
      flex: 1;
      color: white;
      @include screen(md){
        padding-left: 0;
      }
      h1 {
        font-size: $fontXl;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.075em;
      }
      &-container {
        display: flex;
        flex-direction: column;
        .article {
          display: flex;
          align-items: center;
          cursor: pointer;
          padding-top: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid $lightBlue;
          transition-property: background-color;
          transition-duration: 200ms;
          &:hover .details h2{
              background: linear-gradient(90deg, #4D2E90 0%, #EC297B 60%, #EE4747 75%, #F05A28 95%);
              color: orange;
              transition-property: color;
              transition-duration: 200ms;
              -webkit-text-fill-color: transparent;
              -webkit-background-clip: text;
            }
          &:last-child {
            border-bottom: none;
          }
        .details {
           h2 {
              font-weight: bold;
              letter-spacing: 0.075em;
            }
            .date {
              font-size: $fontSm;
            }
          }
        }
      }
      .link {
            font-weight: bold;
            letter-spacing: 0.075em;
            margin-left: auto;
            &:hover {
              background: linear-gradient(90deg, #4D2E90 0%, #EC297B 60%, #EE4747 75%, #F05A28 95%);
              color: orange;
              transition-property: color;
              transition-duration: 200ms;
              -webkit-text-fill-color: transparent;
              -webkit-background-clip: text;
            }
          }
      
    }
    hr {
      border-left: 1px solid white;
      height: auto;
      border-top: none;
      align-self: stretch;
      @include screen(md){
        border-left: none;
        height: 0;
        width: auto;
        border-top: 1px solid white;
      }
    }
  }
}
</style>

<script>

export default {
  data(){
    return {
      filter: {
        'dev': false,
        'sc': false,
        'design': false
      },
      show: [],
      workshops: {
        '1': {
          'name': 'Workshop 1',
          'category': ['dev']
        },
        '2': {
          'name': 'Workshop 2',
          'category': ['dev','design']
        },
        '3': {
          'name': 'Workshop 3',
          'category': ['dev','sc','design']
        },
        '4': {
          'name': 'Workshop 4',
          'category': ['design']
        },
        '5': {
          'name': 'Workshop 5',
          'category': ['sc']
        },
        '6': {
          'name': 'Workshop 6',
          'category': ['dev','sc','design']
        },
        '7': {
          'name': 'Workshop 7',
          'category': ['dev','design']
        },
        '8': {
          'name': 'Workshop 8',
          'category': ['dev','sc']
        },
      }, 
      events: [{
                'name': 'Registration and Sign-in',
                'date': {
                  'month': 'Oct',
                  'day': '4'
                },
                'time': '3:30 p.m. - 4:30  p.m.'
              },
              {
                'name': 'Happy hour',
                'date': {
                  'month': 'Oct',
                  'day': '4'
                },
                'time': '5:00 p.m. - 7:30  p.m.'
              },
              {
                'name': 'Morning coffee and social',
                'date': {
                  'month': 'Oct',
                  'day': '5'
                },
                'time': '8:00 a.m. - 9:00  a.m.'
              }],
      news: [{
              'title':'Influential speakers at DIG this year',
              'date':'September 30, 2021'
            },
            {
              'title':'Tech meet-ups in Baton Rouge',
              'date':'August 2, 2021'
            },
            {
              'title':'How to get the most out of tech conferences',
              'date':'July 3, 2021'
            }]
    }
  },
  methods: {
    updateFilter() {
      console.log('Hi there' + this.show)
      let filter = this.filter;
      let showItems = Object.keys(filter);
      this.show = showItems.filter(function(id) {
        return filter[id]
        });
    }
  },
  computed: {
    showAll: function() {
      if (this.filter.dev == false && this.filter.sc == false && this.filter.design == false){
        return true;
      } 
    }
  },
  mounted: function(){
    this.$nextTick(function () {
    // Animate Grid
    const grid = document.querySelector(".grid");
    animateCSSGrid.wrapGrid(grid, {duration : 300,easing:'linear',stagger:0});
    })
  }
}
</script>
