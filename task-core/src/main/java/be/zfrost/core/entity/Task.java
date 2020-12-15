package be.zfrost.core.entity;



import java.time.LocalDateTime;

public class Task {

    private static int lastID = 0;
    private int id;
    private String title;
    private String content;
    private LocalDateTime createdOn;
    private LocalDateTime checkedOn;

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

    public LocalDateTime getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(LocalDateTime createdOn) {
        this.createdOn = createdOn;
    }

    public LocalDateTime getCheckedOn() {
        return checkedOn;
    }

    public void setCheckedOn(LocalDateTime checkedOn) {
        this.checkedOn = checkedOn;
    }
}
