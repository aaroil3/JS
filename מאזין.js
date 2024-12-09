
// פונקציה להוספת מאזין לשדות לפי ID
function addListenersToFields(ids) {
    const idList = ids.split(','); // פיצול הרשימה למערך
    const fields = idList.map(id => document.getElementById(id.trim())); // הבאת האלמנטים לפי ID

    fields.forEach(field => {
        if (field) {
            field.addEventListener('input', function () {
                const changedField = this.id; // ID של השדה שהשתנה
                const values = {}; // אובייקט לשמירת הערכים של כל השדות

                // שמירת ערכים של כל השדות
                fields.forEach(f => {
                    if (f) values[f.id] = f.value;
                });

                // הדפסת הערכים והשדה שהשתנה
                console.log('הערכים הנוכחיים:', values);
                console.log('השדה שהשתנה:', changedField);
            });
        } else {
            console.warn(`לא נמצא שדה עם ID: ${id.trim()}`);
        }
    });
}
