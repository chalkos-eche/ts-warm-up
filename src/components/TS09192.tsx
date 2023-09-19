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
			<h2>중첩 객체 </h2>
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
			{location.pathname === '/0919/2' && (
				<>
					<hr />
					<button>
						<Link to="/0919/3">Next</Link>
					</button>
				</>
			)}
		</div>
	);
};

export default TS09192;
