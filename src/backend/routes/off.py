import os
import sys,json
def read_in():
    lines = sys.stdin.readlines()
    # Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])
var=read_in()
t=int(var[0])
# print(t)
os.system("sshpass -p 'mouni1995' ssh 'lingam@10.2.24.202' 'cd pybacnet;cd tools;python off.py %d' "%t)
# print ("hello")
