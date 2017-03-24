class CreateCourseStudents < ActiveRecord::Migration[5.0]
  def change
    create_table :course_students do |t|
      t.string :course
      t.string :references
      t.references :student, foreign_key: true

      t.timestamps
    end
  end
end
