import './Banner.css';
import { Form } from './Form';

export function Banner() {
  return (
    <div className="banner">
      <div className="container flex flex-col items-center justify-center h-full max-w-6xl gap-6 px-4 mx-auto">
        <div className="text-center">
          <h1 className="mb-2 font-sans text-5xl text-white">Somofarm Cửu Long</h1>
          <h2 className="text-2xl font-semibold text-white">
            Đậm đà tình sông nước
          </h2>
        </div>
        <Form />
      </div>
    </div>
  );
}