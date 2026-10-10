/** @type {import('tailwindcss').Config} */
module.exports = {
  // index.html の中で使われているクラスだけを拾って、tailwind.css を作ります
  content: ['./index.html'],
  theme: { extend: {} },
  plugins: [],
};
