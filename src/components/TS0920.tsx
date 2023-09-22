import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const TS0920 = () => {
	return (
		<>
			<p>TS0920.tsx</p>
			<h1>객체 타입에서 알아두어야 할</h1>
			<h2>Optinal Property</h2>
			<h3>1.선택적 프로퍼티</h3>
			<pre>
				{`type Point= {
	x: number; 
	y: number; 
	z: number; 
};`}
			</pre>
			<span>에서 z가 필수가 아닐 경우</span>
			<br />
			<pre>
				{`type Point = {
	x: number; 
	y: number; 
	z?: number;
}`}
			</pre>
			<br />
			<pre>{` const myPoint: Point = { x: 1, y: 2 }`}</pre>{' '}
			<span>로도 가능하다.</span>
			<br />
			<h1>객체 타입에서 알아두어야 할</h1>
			<h2>readonly</h2>
			<h3>2. 읽기 속성</h3>
			<p>객체의 readonly 를 작성하면 변경할때 경고를 해준다</p>
			<p>작성법;</p>
			<pre>{`type User = {
readonly id:number,
name: string,
age: number,
};`}</pre>
			<br />
			<pre>{`const user:User = { id: 1, name: "Elton", age: 30}`}</pre>
			<p>user.id = 238974 에러가 뜸</p>
			<h2>intersection type</h2>
			<h3>교차타입</h3>
			<p> 앰퍼샌드& 기호로 결합한다</p>
			<pre>{`type Circle = {
				radius: number;
				};
				type Colorful = {
					color: string;
				};
				두개를 합칠 수 있다
				type ColorfulCircle = Circle & Colorful;
				`}</pre>
			<span>
				결합하면 ColorfulCirlce 수정 안해도 Colorful 에서만 설정해도 변경이 다
				바뀐다.
			</span>
			<h3>새로운 타입을 추가하고 싶을 땐</h3>
			<pre>{`type colorfulCircle = Circle &
			 Colorful & { 
				border:boolean;
				};`}</pre>
			<p>
				이런식으로 새로운타입을 중괄호안에 넣어주면 된다.
				<span>(지저분하다)</span>
			</p>
			<br />
			. . .
			<br />
			<Outlet />
			{location.pathname === '/0920' && (
				<button>
					<Link to="/0920/2">Next</Link>
				</button>
			)}
		</>
	);
};

export default TS0920;
