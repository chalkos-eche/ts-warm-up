import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
const TS0919 = () => {
	const location = useLocation();

	return (
		<>
			{location.pathname === '/0919' && (
				<>
					<p>TS0919.tsx</p>
					<h1>Objects : 객체</h1>
					<pre>
						{
							"{ \nname: 'Elton',\nbreed: 'Australian Shpeherd',  \nage: 0.5,\n}"
						}
					</pre>
					<p>
						와 같은 객체가 있을경우 객체의 형태를 정하는 애너테이션을 만들 수
						있다
					</p>
					<pre>{'function printName(first:string,last:string) {  \n}'}</pre>{' '}
					<br />
					<pre>
						{'function printName(person:{first:string;last:string}) {  \n}'}
					</pre>
					<br />
					<pre>{'printName({___})'}</pre>
					<span> 라고 적으면 에러가 뜬다</span>
					<br />
					<pre>{'printName({first:"Thomans",last:"Jenkins"})'}</pre>
					<span> 라 해야 정상적</span>
					<h3>템플릿 리터럴과 반환값을 이용한 모습 ;</h3>
					<pre>
						{
							'function printName(person:{first:string;last:string}):void {  \n console.log(`${person.first}`)\n}'
						}
					</pre>
					<h3>다른 예제;</h3>
					<pre>{'{x:number,y:number}'}</pre> <br />
					<pre>{'let coord:{x:number;y:number} = {x:34,y:2} '}</pre>
					<p>어색하지만 같은 이런식으로도 애너테이션을 만들 수 있다.</p>
					<h3>retur값의 애너테이션도 지정할 수 있다.</h3>
					<pre>
						{
							'function randomCoord():{x:number,y:number}{  \n    return { x:Math.random(), y:Math.random() }\n  }'
						}
					</pre>
					<h3>다른 프로퍼티를 추가하면 어떻게 되는가 ?</h3>
					<pre>{'printName({ first: "Mick", last: "Jagger" })'}</pre>
					<span>객체 에너테이션에 나이가 없는 상황에서 age를 추가해보자</span>
					<br />
					<pre>{'printName({ first: "Mick", last: "Jagger",age:473})'}</pre>
					<span>
						오류가 뜬다.(알려진 프로퍼티만 기입 할 수 있다.) age는 이 타입에
						없음
					</span>
					<h3>But..</h3>
					<pre>
						{' const singer ={first: "Mick", last: "Jagger",age:473'}
					</pre>{' '}
					<span>라는 변수를 만든뒤</span>
					<br />
					<pre>printName(singer)</pre>{' '}
					<span>할 경우 오류가 나오질 않는다 ! </span>
					<p>
						일반적으로 이 객체를 변수로 가지고 있다면, 타입스크립트는 함수에
						필요한 프로퍼티만 확인한다. ( 추가 확인은 하지 않음 모자라면
						X,많은건 Okay )
					</p>
				</>
			)}
			<Outlet />
			{location.pathname === '/0919' && (
				<button>
					<Link to="/0919/2">Next</Link>
				</button>
			)}
		</>
	);
};

export default TS0919;
