package be.zfrost.core.entity;



import java.time.LocalDateTime;
import java.util.Calendar;

public class Task {

    private static int lastID = 0;
    private int id;
    private String title;
    private String content;
    private Calendar createdOn;
    private Calendar checkedOn;

    public Task() {
        this.id = this.lastID++;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Calendar getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Calendar createdOn) {
        this.createdOn = createdOn;
    }

    public Calendar getCheckedOn() {
        return checkedOn;
    }

    public void setCheckedOn(Calendar checkedOn) {
        this.checkedOn = checkedOn;
    }
}
