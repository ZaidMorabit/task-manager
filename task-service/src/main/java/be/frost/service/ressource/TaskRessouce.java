package be.frost.service.ressource;

import be.zfrost.core.entity.Task;
import be.zfrost.core.entity.Tasks;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Set;

@Path("/task")
@Produces(MediaType.APPLICATION_JSON)
public class TaskRessouce {


    @GET
    public Set<Task> getTasks(){
        return Tasks.LIST_OF_TASKS;
    }

    @Path("/{id}")
    @GET
    public Task getTaskByID(@PathParam("id") int id){
        return Tasks.getTaskByID(id);
    }

    @POST
    public Task createTask(@FormParam("title") String title,
                               @FormParam("content") String content){
        Task task = new Task();
        task.setTitle(title);
        task.setContent(content);
        task.setCreatedOn(Calendar.getInstance());

        Tasks.LIST_OF_TASKS.add(task);

        return task;
    }

    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @PUT
    public Response ModifyTask(@PathParam("id") int id){
        //TODO
        return Response.status(Response.Status.OK).build();
    }

    @Path("/{id}")
    @DELETE
    public Task deleteTask(@PathParam("id") int id){
        Task task = Tasks.getTaskByID(id);
        Tasks.LIST_OF_TASKS.remove(task);
        return task;
    }
}
