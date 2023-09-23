import React from 'react';

const TS0924 = () => {
	return (
		<div>
			<p>TS0924.tsx</p>
			<h1>Tuple튜플 Enum이넘</h1>
			<p>타입스크립트 고유의 기능 Tuple ( JS엔 없음 )</p>
			<pre>
				const color: [] 배열 사이에 타입을 지정해준다. const
				color:[number,number,number] = [255,0,45];
			</pre>
			<h2>Enums</h2>
			<p>예제</p>
			<pre>
				{`
          enum Response {
            no, //1
            yes, //2
            maybe, //3
          }
          
          enum Response {
            no = 2 , //2
            yes, //3
            maybe, //4
          }
          
          enum Response {
            no = 10, //10
            yes = 12, // 12
            maybe = 13, //13
          }
          enum Response {
            no = 0,
            yes = 1, 
            maybe = "Maybe",
          }
        `}
				<p>반복적인 값을 참조할 때 사용한다</p>
				<p>예제2</p>
				<pre>
					{`
            enum OrderStatus {
              PENDING,
              SHIPPED,
              DELIVERED,
              RETURNED
            }
            const status = OrderStatus.DELIVERED (객체 사용하듯이 사용하면 된다.)
            function isDelivered(status:OrderStatus) {
              return status === OrderStatus.DELIVERED (이런식으로 if문을 나눌수 있다.)
            }
            isDelivered(status)
          `}
					<p>예제3</p>
					{`enum ArrowKeys {
            UP = "ArrowUp",
            DOWN = "ArrowDown",
            LEFT = "ArrowLeft",
            RIGHT = "ArrowRight",
            ERROR = "error"
          }`}
					<h2>enum 의 장점은</h2>
					<p>참조가 가능해 자동완성 기능 사용 가능</p>
					<p>가독성의 도움이 됨</p>
					<h2>enum은 js 로 컨버팅후 데이터로 남는다</h2>
					<h2>
						이 떄 데이터로 안남기게하려면 const enum 키워드를 사용하면된다.
					</h2>
				</pre>
			</pre>
		</div>
	);
};

export default TS0924;
