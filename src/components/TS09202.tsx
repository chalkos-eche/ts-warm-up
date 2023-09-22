import React from 'react';

const TS09202 = () => {
	return (
		<div>
			<p>TS09202.tsx</p>
			<h2>Array Types</h2>
			<h3>타입스크립트 배열 타입</h3>
			<pre>{`
				const activeUsers:[]=[];
				actvieUsers.push("steven");  <- 빈 배열이라 추가를 못함.
				const actvieUsers:string[] = []; <- 이런식으로 설정 해야함. 
			`}</pre>
			<p>배열은 타입추정이되지않으니 적어줘야한다.</p>
			<h3>배열 타입2</h3>
			<pre>{`
				const bools:Array<boolean> = [] <-둘다 같은 의미 
			`}</pre>
			<p>커스텀 타입으로도 배열타입을 선언 할 수 있다</p>
			<pre>{`
				type Point = { 
					x: number,
					y: number,
				}
				const coords: Point[] = []
				coords.push({x: 23, y: 8});
				coords.push({x: 23, y: "8"}); <- 에러뜸 y 가 스트링이라 
			`}</pre>
			<h2>다차원 배열</h2>
			<pre>{`
				const board:string[] =[] <- 1차원 배열
				const board:string[][] =[] <- 2차원 배열
				const board:string[][][] =[] <- 3차원 배열
				
			`}</pre>
		</div>
	);
};

export default TS09202;
