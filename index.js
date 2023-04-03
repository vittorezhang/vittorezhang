const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function isZero(x) {
	return x < 10 ? '0' + x : x
}

function formatDate(time) {
	const y = time.getFullYear()
	const m = time.getMonth() + 1
	let d = time.getDate()
	const h = time.getHours()
	const mm = time.getMinutes()
	const s = time.getSeconds()
	return y + '/' + isZero(m) + '/' + isZero(d) + ' ' + isZero(h) + ':' + isZero(mm) + ':' + isZero(s)
}

function generateProgressBar() {
	const progressBarCapacity = 30
	const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
	const progressBar = '█'.repeat(passedProgressBarIndex) + '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
	return `{ ${progressBar} }`
}

const readme = `\
![me](https://cdn.jsdelivr.net/gh/vittorezhang/picture_repository@master/README/vision.gif)

⏰ Updated on ${formatDate(new Date())}

---

### 🚀 Welcome to Vittore Zone

Here is some personal information about me:

- 🔭 I'm Chinese and currently working in Shenzhen.
- 📖 I'm currently learning && using Vue.js/Nuxt.js and React.js/Next.js...
- 🌱 Ask me about any question about my repos or directly give me a issue/pr~
- 📫 How to reach me: yc_zwt@163.com.
- 💬 Wechat: zwt_yc.
<p align="center"> 
  Visitor count<br>
  <img src="https://profile-counter.glitch.me/vittorezhang/count.svg" />
</p>

### 🔧 Language && Tools

![JavaScript](https://img.shields.io/badge/-JavaScript-f7df1e?style=flat-square&logo=javaScript&labelColor=white&logoColor=f7df1e)
![TypeScript](https://img.shields.io/badge/-TypeScript-007BCD?style=flat-square&logo=typeScript&labelColor=fff&logoColor=007BCD)
![Node](https://img.shields.io/badge/-Node-29beb0?style=flat-square&logo=node.js&labelColor=white&color=05A505)
![Vue](https://img.shields.io/badge/-Vue.js-29beb0?style=flat-square&logo=vue.js&labelColor=white&color=4FC08D)
![Nuxt](https://img.shields.io/badge/-Nuxt-29beb0?style=flat-square&logo=nuxt.js&labelColor=white&color=3FE5A1)
![React](https://img.shields.io/badge/-React-29beb0?style=flat-square&logo=react&labelColor=white&color=61DAFB)
![Next](https://img.shields.io/badge/-Next-black?style=flat-square&logo=Next.js&logoColor=black&labelColor=white&color=black)
![Webpack](https://img.shields.io/badge/-Webpack-55A7DD?style=flat-square&logo=webpack&logoColor=55A7DD&labelColor=white&color=55A7DD)
![Vite](https://img.shields.io/badge/-Vite-8976ff?style=flat-square&logo=vite&logoColor=8976ff&labelColor=white&color=8976ff)


### Hi there 👋

<p align="center"> 
  <!-- <img align="center" alt="GIF" src="https://media.giphy.com/media/cIn5fTcjnKhStIeAef/giphy.gif" width="430" height="100%"> -->
  <img align="center" alt="GIF" src="https://media.giphy.com/media/jdPMeyv9rn0hZHh8n9/giphy.gif" width="430" height="100%">
</p>


⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

### My GitHub Contributions    

![](https://cdn.jsdelivr.net/gh/vittorezhang/picture_repository@master/README/github-contribution-grid-snake.gif)          

### About me      

| <a href="https://github.com/anuraghazra/github-readme-stats"><img align="center" src="https://github-readme-stats.vercel.app/api?username=vittorezhang&show_icons=true&include_all_commits=true&theme=buefy&hide_border=true" alt="vittorezhang's github stats" /></a> | <a href="https://github.com/anuraghazra/github-readme-stats"><img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=vittorezhang&layout=compact&theme=buefy&hide_border=true" /></a> |
| ------------- | ------------- |

### Repositories

[![Ashutosh's github activity graph](https://activity-graph.herokuapp.com/graph?username=vittorezhang&theme=github)](https://github.com/vittorezhang/react-ssr)


[![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=vittorezhang&theme=vue&show_icons=true)](https://github.com/vittorezhang)
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&layout=compact&theme=vue&show_icons=true)](https://juejin.cn/user/3122268756255294/posts)

[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=vittorezhang&repo=webServer&theme=vue)](https://github.com/vittorezhang/webServer)
[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=vittorezhang&repo=circle-progress&theme=vue)](https://github.com/vittorezhang/circle-progress)
\
`

console.log(readme)
