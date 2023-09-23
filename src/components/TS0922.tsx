import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const TS0922 = () => {
	return (
		<>
			<p>TS0922.tsx</p>
			<h1>유니온 타입</h1>
			<h2>union Types</h2>
			<pre>
				{`const guessAge = (age:number|string)=>{
          return "Your age is: "+ age;
        }`}
			</pre>
			<p>보기처럼 간단하게 두가지 타입이 허용될경우 사용 가능</p>
			<h2>유니온으로 타입 좁히기</h2>
			<pre>{`function calculateTax(price: number|string, tax: number){
          return price * tax
        } 일 경우 price 가 string일 수 있어서 오류가 뜸.`}</pre>
			<pre>{`
          function calculateTax2(price: number|string, tax: number){
            return price.replace("$","")
          } 일 경우 에도 오류가 뜬다. 가격은 숫자 일 수 있어서
        `}</pre>
			<p>이 때 필요한것은 바로 타입좁히기 (Type Narrowing)</p>
			<pre>{`function calcualtaeTax3(price: number|string, tax: number){
        if (typeof price === "string") {
          price.replace("$", ""); <- price 는 string
        } else {
          return price * tax <- 여기 price 는 number
        }
      }`}</pre>
			<pre>{`function calcualtaeTax3(price: number|string, tax: number){
        if (typeof price === "string") {
          price = parseFloat(price.replace("$", ""))
        }
          return price * tax
        }
      }`}</pre>
			<h2>유니온 타입과 배열 </h2>
			<p>배열이 하나이상의 타입을 갖게 할 수 있다</p>
			<pre>const stuff: (number | string) [] = [1, 2, 3];</pre>
			<p>유니온으로 작성후 괄호로 처리해준다</p>
			<pre>const stuff: number | string [] = [1, 2, 3];</pre> <span> X </span>
			<pre>const stuff: ( number | string ) [] = [1, 2, 3];</pre>
			<span> O </span>
			<p>커스텀 타입을 이용한 유니온 타입 설정도 가능하다.</p>
			<pre>{` type Loc = { 
				lat: number;
			long: number;
		};
		type Point = { 
			x: number; 
			y: number
		};
			const coords: (Point | Loc)[] = [
				{ x: 23, y: 8 },
				{ lat: 23, long: 8 },
			]
			`}</pre>
			<h2>유니온타입의 리터럴 타입</h2>
			<p>리터럴을 직접 작성하여 타입가드를 할 수 있다</p>
			<p>예제;</p>
			<pre>{`
				type DayOfWeek = | 
				"Monday" |
				"Tuesday" |
				"Wednesday" |
				"Thursday" |
				"Friday" |
				"Saturday" |
				"Sunday";

				const today:DayOfWeek = "Monday"
			`}</pre>
			<br />
			<Outlet />
			{location.pathname === '/0922' && (
				<button>
					<Link to="/0922/2">Next</Link>
				</button>
			)}
		</>
	);
};

export default TS0922;
