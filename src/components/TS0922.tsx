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
