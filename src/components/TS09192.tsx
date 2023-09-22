import React from 'react';
import { Link } from 'react-router-dom';

const TS09192 = () => {
	return (
		<div>
			<p>TS09192.tsx</p>

			<h2>Type Alias</h2>
			<p>타입 별칭</p>
			<pre>{`let coordinate:{x:number; y:number} = {x:34,y:2}`}</pre>
			<p>이런식으로 x:number y:number를 계속사용하기엔 재사용성이 낮으니</p>
			<p>타입별칭을 이용하여 지정해준다</p>
			<h3>키워드는 type 뒤에 대문자 ! </h3>
			<pre>${`type Point = { \n  x:number; \n  y:number \n };`}</pre>
			<p>그 후로 타입명을 붙이면된다.</p>
			<pre>
				{`function doublePoint(point:Point):Point {  \n    return { x: point.x * 2, y: point.y * 2 } \n  }`}
			</pre>
			<h2>중첩 타입 객체 </h2>
			<h3>예제;</h3>
			<pre>{`const Person = ( person: { 
        name:string;
        age: number;
        parentNames: {
          mother:string;
          father:string;
          }
      }) => { return person }
      `}</pre>
			<h3>예제2;</h3>
			<pre>
				{`function calculatePayout(song: {title: string, artist: string,  
	numStream:number, credits: {producer: string, writer: string}}) {
		}`}
			</pre>
			<br />
			<span>이런식의 지저분한 애너테이션을</span>
			<span>중첩 객체 타입으로 별칭할 수 있다;⬇️</span>
			<br />
			<pre>{`type Song = { title: string;
		artist :string;
		numStreams: number;
		credits: {
			producer: string; 
			writer : string;
			}
	}
	function calculatePayout(song:Song):number {
		return song.numStreams * .0033
	}
	function printSong(song: Song): void {
		console.log({song.title} - {song.artist}
			);
	}
`}</pre>
			<br />
			<pre>
				{`{
	title:"Unchained Melody",
	artist : "Righteous Brothers",
	numStreams: 12873321,
	creadits:{
	producer: "Phil Spector",
	writer: "Alex North",
}
tsc objects.ts < js 컴파일 
					`}
			</pre>
			{location.pathname === '/0919/2' && (
				<>
					<hr />
					<button>
						<Link to="/0920">Next</Link>
					</button>
				</>
			)}
		</div>
	);
};

export default TS09192;
