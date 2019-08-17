<?php

class SQL {

    private $con;
    private $dbname;
    private $errno;
    private $error;
    private $qresul;
    private $fetch_started = false;
    
    public function __construct($dbname) {
        $this->dbname = $dbname;
    }

    public function Connect() {
        $this->con = mysqli_connect("127.0.0.1", "root", "", $this->dbname);
        mysqli_set_charset($this->con, "utf8");
	$this->errno = mysqli_connect_errno();
        if ($this->errno) {
            return false;
        } else {
            return true;
        }
    }
    
    public function Cache($command) {
        $result = mysqli_query($this->con, $command);
        $this->errno = mysqli_errno($this->con);
        if ($this->errno) {
            return false;
        }
        while ($arow = mysqli_fetch_assoc($result)) {
            foreach ($arow as $key => $value) {
                $this->qresul[$key] = $value;
            }
        }
        return true;
    }
    
    public function Get($query,$command) {
        $result = mysqli_query($this->con, $command);
        $this->errno = mysqli_errno($this->con);
        if ($this->errno) {
            return false;
        }
        $afields = mysqli_fetch_fields($result);
        while ($arow = mysqli_fetch_assoc($result)) {
            foreach ($arow as $key => $value) {
                $this->qresul[$key][] = $value;
            }
        }
    }
    
    public function GetView($viewName) {
        $comm = 'SELECT * FROM '.$viewName;
        return $this->Get($viewName, $comm);
    }
    
    public function AddToGet($key, $value) {
        $this->qresul[$key][] = $value;
    }
    
    public function respondJSON() {
        echo json_encode($this->qresul,JSON_NUMERIC_CHECK);
    }

    public function Fetch($query,$command) {
        $n = 0;
        if ($this->fetch_started) {
            $chr2 = ',"';
        } else {
            $this->fetch_started = true;
            $chr2 = '{"';
        } 
        $result = mysqli_query($this->con, $command);
        $this->errno = mysqli_errno($this->con);
        if ($this->errno) {
            return false;
        }
        while ($arow = mysqli_fetch_assoc($result)) {
            $i = 0;
            foreach ($arow as $key => $value) {
                $objbuf[$i++] = '"'.$key.'":"' . $value . '"';
            }
            $rowbuf[$n++] = '{' . implode(',', $objbuf) . '}';
        }
        return $chr2.$query.'":[' . implode(',', $rowbuf) . ']';
    }
    
    public function FetchView($viewName) {
        $comm = 'SELECT * FROM '.$viewName;
        return $this->Fetch($viewName, $comm);
    }
    
    public function Insert($command) {
        $result = mysqli_query($this->con, $command);
        $this->errno = mysqli_errno($this->con);
        if ($this->errno) {
	    $this->error = mysqli_error($this->con);
            return false;
        }	    
    }

    public function ErrCode() {
        return $this->errno;
    }

    public function Error() {
        return $this->error;
    }
    
    public function close() {
        mysqli_close($this->con);
        if ($this->fetch_started) {
            $this->fetch_started = false;
            return '}';
        }
        return '';
    }
}

?>