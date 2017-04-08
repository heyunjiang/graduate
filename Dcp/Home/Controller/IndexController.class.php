<?php
namespace Home\Controller;
use Think\Controller;
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
class IndexController extends Controller {
    public function index(){
    	dump($_SERVER['HTTP_REFERER']);
        // $this->success(login);
    }
    public function login(){
    	$data = array();
    	$data['code'] = 0;
    	$data['message'] = '登录成功';
    	$data['status'] = 200;
    	$data['success'] = true;
    	$this->ajaxReturn($data);
    }
}