angular.module("answer").controller("AnswerCtrl",
	function ($scope) {
		// All sorts of exciting AngularJS stuff going on here...
		
		$scope.text =
		"Imagine thousands of users hitting your app, and thus requesting info from your server. What do you think will happen? You have no way of handling these requests, and even if you do, they may be synchronous (explained later). Users end up waiting in line behind thousands of other users for the necessary files to return. Loading speeds are slow, creating a poor user experience and causing you to lose business.";
		$scope.text2="You are about to initiate several requests for the website’s HTML page, it’s CSS stylesheets, it’s JavaScript documents, and so on. You are asking or requesting their server to show you the page and all the documents associated with it.";
		$scope.text3 = "With Node.js, both the client and server can initiate two-way connections allowing data to freely communicate between the two. Even though Node.js is single threaded — just like Javascript —and only one process happens at a time (explained later in the series), it ‘acts’ multi-threaded by processing requests via callbacks and promises. It’s thus able to supporting thousands of concurrent connections in an non-blocking/asynchronous manner.";	
	}
);


