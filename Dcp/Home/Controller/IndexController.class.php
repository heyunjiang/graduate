<?php
namespace Home\Controller;
use Think\Controller;
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Content-Type: text/html; charset=UTF-8");
class IndexController extends Controller {
    public function index(){
    	$Users = M('Users');
        dump($Users->select());
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
    //用户信息
    public function users(){
        $data = array();
        $data['success'] = true;
        $data['data'] = array();
        $request = json_decode(file_get_contents('php://input'));
        $Users = M('Users');
        //新增用户
        if(REQUEST_METHOD == 'POST'){
            $addData['name'] = $request->name;
            $addData['nickName'] = $request->nickName;
            $addData['age'] = $request->age;
            $addData['avatar'] = 'https://t.alipayobjects.com/images/T1QUBfXo4fXXXXXXXX.png';
            $addData['isMale'] = $request->isMale;
            $addData['phone'] = $request->phone;
            $addData['email'] = $request->email;
            $addData['address'] = $request->address;
            $addData['createTime'] = date("Y-m-d",time());
            $Users->add($addData);
        }else if(REQUEST_METHOD == 'GET'){//读取所有用户信息
            
        }else if(REQUEST_METHOD == 'DELETE'){//删除用户信息
            if($request->id){
                $Users->delete($request->id);
            }
        }else if(REQUEST_METHOD == 'UPDATE'){//删除用户信息
            if($request->id){
                $addData['id'] = $request->id;
                $addData['name'] = $request->name;
                $addData['nickName'] = $request->nickName;
                $addData['age'] = $request->age;
                $addData['avatar'] = 'https://t.alipayobjects.com/images/T1QUBfXo4fXXXXXXXX.png';
                $addData['isMale'] = $request->isMale;
                $addData['phone'] = $request->phone;
                $addData['email'] = $request->email;
                $addData['address'] = $request->address;
                $addData['createTime'] = date("Y-m-d",time());
                $Users->save($addData);
            }
        }
        $data['data'] = $Users->select();
        $data['page'] = array();
        $data['page']['total'] = intval($Users->count());
        $data['page']['current'] = 1;
        $data['func'] = REQUEST_METHOD;

        $this->ajaxReturn($data);
    }
}