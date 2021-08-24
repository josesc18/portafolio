import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill/skill.service';
import { Skill } from 'src/app/shared/models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skills = this.skillService.getAll();
  }

}
