package be.zfrost.core.entity;

import java.time.LocalDateTime;
import java.util.HashSet;

public class Tasks {
    public static HashSet<Task> LIST_OF_TASKS = new HashSet<Task>();

    //TO be deleted
    static{
        Task t = new Task();
        t.setTitle("Title 1");
        t.setContent("some content...");
        t.setCreatedOn(LocalDateTime.now());
        LIST_OF_TASKS.add(t);

        t = new Task();
        t.setTitle("Title 2");
        t.setContent("some content2...");
        t.setCreatedOn(LocalDateTime.now());
        LIST_OF_TASKS.add(t);

        t = new Task();
        t.setTitle("Title 3");
        t.setContent("some content3...");
        t.setCreatedOn(LocalDateTime.now());
        LIST_OF_TASKS.add(t);




    }

    public static Task getTaskByID(int id){
        for(Task task : Tasks.LIST_OF_TASKS){
            if(task.getId() == id){
                return task;
            }
        }
        return null;
    }

}
