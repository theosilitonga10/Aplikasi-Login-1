1.	/** @module Login-Script */
2.	/** 
3.	* Membuat variabel loginFormElement untuk tampilan form.
4.	* @constant {HTMLElement}
5.	*/
6.	const loginFormElement = document.querySelector('#loginForm');
7.	 
8.	 
9.	/** 
10.	* Membuat variabel inputEmailElement untuk tampilan input email.
11.	* @constant {HTMLElement}
12.	*/
13.	const inputEmailElement = document.querySelector('#inputEmail');
14.	 
15.	 
16.	/** 
17.	* Membuat variabel inputPasswordElement untuk tampilan input password.
18.	* @constant {HTMLElement}
19.	*/
20.	const inputPasswordElement = document.querySelector('#inputPassword');
21.	 
22.	 
23.	/** 
24.	 * Membuat variabel expectedEmail untuk menyimpan informasi email sementara.
25.	 * @constant {string}
26.	 */
27.	const expectedEmail = 'admin@dicoding.com';
28.	 
29.	 
30.	/** 
31.	 * Membuat variabel expectedPassword untuk menyimpan informasi password sementara.
32.	 * @constant {string}
33.	 */
34.	const expectedPassword = 'superpassword'
35.	 
36.	 
37.	/* Comment :  Menambahkan aksi klik pada button. */
38.	loginFormElement.addEventListener('submit', function(event) {
39.	  event.preventDefault();
40.	  
41.	  /** 
42.	   * Membuat variabel email untuk menyimpan nilai email yang didapatkan saat button ditekan.
43.	   * @constant {string}
44.	   */
45.	  const email = inputEmailElement.value;
46.	  
47.	  /** 
48.	   * Membuat variabel password untuk menyimpan niali password yang didapatkan saat button ditekan.
49.	   * @constant {string}
50.	   */
51.	  const password = inputPasswordElement.value;
52.	 
53.	 
54.	  /* Comment : Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
55.	  if (email == expectedEmail && password == expectedPassword) {
56.	 
57.	    /* Comment : Jika sesuai maka program akan berpindah ke halaman home. */
58.	    goToHome();
59.	 
60.	  } else {
61.	 
62.	    /* Comment : Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah. */
63.	    showPopUp();
64.	 
65.	  }
66.	});
