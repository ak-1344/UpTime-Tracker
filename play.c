#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>

int main() {
    pid_t pid = fork(); // Fork to create a background process

    if (pid < 0) {
        perror("Fork failed");
        return 1;
    }

    if (pid == 0) {
        // Child process runs the full command in a shell
        execl("/bin/sh", "sh", "-c", 
              "cd /home/ak/Desktop/Data/Coding/Projects/UpTime/web-ui && npm start -- --no-sandbox",
              (char *)0);
        perror("execl failed");
        exit(1);
    } else {
        // Parent process
        printf("Started background process with PID: %d\n", pid);
    }

    return 0;
}
