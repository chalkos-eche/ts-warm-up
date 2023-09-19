import React from 'react';

const TS0919 = () => {
	return (
		<div>
			<p>0919</p>
			<h1>Objects : 객체</h1>
			<pre>{"{name: 'Elton',breed: 'Australian Shpeherd',age: 0.5,}"}</pre>
			<p>
				와 같은 객체가 있을경우 객체의 형태를 정하는 애너테이션을 만들 수 있다
			</p>
			<pre>{'function printName(first:string,last:string){}'}</pre> <br />
			<pre>{'function printName(pers:{first:string;last:string}){}'}</pre>{' '}
			<br />
			<pre>{'printName({})'}</pre>
			<span> 라고 적으면 에러가 뜬다</span>
			<br />
			<pre>{'printName({first:"Thomans",last:"Jenkins"})'}</pre>
			<span> 라 해야 정상적</span>
			<h3>템플릿 리터럴과 반환값을 이용한 모습 ;</h3>
			<pre>
				{
					'function printName(person:{first:string;last:string}):void{ console.log(`${person.first}`)}'
				}
			</pre>
			<h3>다른 예제;</h3>
			<pre>{'{x:number,y:number}'}</pre>
			<pre>{'let coord:{x:number;y:number} ={x:34,y:2}'}</pre>
			<p>어색하지만 같은 이런식으로도 애너테이션을 만들 수 있다.</p>
			<h3>retur값의 애너테이션도 지정할 수 있다.</h3>
		</div>
	);
};

export default TS0919;
