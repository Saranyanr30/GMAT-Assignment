import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { angularMath } from 'angular-ts-math';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ScoreComponent implements OnInit {
  ngOnInit() {
  }
  constructor(private fb: FormBuilder) { }
  scoreForm = this.fb.group({
    currentQuant: ['', [Validators.required, Validators.min(1), Validators.max(60)]],
    targetQuant: ['', [Validators.required, Validators.min(1), Validators.max(60)]],
    currentVerbal: ['', [Validators.required, Validators.min(1), Validators.max(60)]],
    targetVerbal: ['', [Validators.required, Validators.min(1), Validators.max(60)]],
  })
  save(): void {
    let currentQuant = this.scoreForm.get('currentQuant').value;
    let targetQuant = this.scoreForm.get('targetQuant').value;
    let currentVerbal = this.scoreForm.get('currentVerbal').value;
    let targetVerbal = this.scoreForm.get('targetVerbal').value;
    let currentTotal = 200 + (currentQuant + currentVerbal) * 5;
    let targetTotal = 200 + (targetQuant + targetVerbal) * 5;
    let currentotalbar = document.getElementById("currentotalbar");
    let totalbasebar = document.getElementById("totalbasebar");
    currentotalbar.style.width = (currentTotal / 800) * totalbasebar.offsetWidth + 'px';
    let targetotalbar = document.getElementById("targetotalbar");
    targetotalbar.style.width = (targetTotal / 800) * totalbasebar.offsetWidth + 'px';
    let quantbasebar = document.getElementById("quantbasebar");
    let currentquantbar = document.getElementById("currentquantbar");
    currentquantbar.style.width = (currentQuant / 60) * quantbasebar.offsetWidth + 'px';
    let targetquantbar = document.getElementById("targetquantbar");
    targetquantbar.style.width = (targetQuant / 60) * quantbasebar.offsetWidth + 'px';
    let verbalbasebar = document.getElementById("verbalbasebar");
    let currentverbalbar = document.getElementById("currentverbalbar");
    currentverbalbar.style.width = (currentVerbal / 60) * verbalbasebar.offsetWidth + 'px';
    let targetverbalbar = document.getElementById("targetverbalbar");
    targetverbalbar.style.width = (targetVerbal / 60) * verbalbasebar.offsetWidth + 'px';
    let currentotalscore = document.getElementById("currentotalscore");
    currentotalscore.innerHTML = '' + currentTotal;
    let right = -angularMath.nearOfNumber(currentotalscore.offsetWidth / 2);
    currentotalscore.style.right = right + 'px';
    let targetotalscore = document.getElementById("targetotalscore");
    targetotalscore.innerHTML = '' + targetTotal;
    let right1 = -angularMath.nearOfNumber(targetotalscore.offsetWidth / 2);
    targetotalscore.style.right = right1 + 'px';
    let currentquantscore = document.getElementById("currentquantscore");
    currentquantscore.innerHTML = 'Q' + currentQuant;
    let quantright = -angularMath.nearOfNumber(currentquantscore.offsetWidth / 2);
    currentquantscore.style.right = quantright + 'px';
    let targetquantscore = document.getElementById("targetquantscore");
    targetquantscore.innerHTML = 'Q' + targetQuant;
    let quantright1 = -angularMath.nearOfNumber(targetquantscore.offsetWidth / 2);
    targetquantscore.style.right = quantright1 + 'px';
    let currentverbalscore = document.getElementById("currentverbalscore");
    currentverbalscore.innerHTML = 'V' + currentVerbal;
    let verbalright = -angularMath.nearOfNumber(currentverbalscore.offsetWidth / 2);
    currentverbalscore.style.right = verbalright + 'px';
    let targetverbalscore = document.getElementById("targetverbalscore");
    targetverbalscore.innerHTML = 'V' + targetVerbal;
    let verbalright1 = -angularMath.nearOfNumber(targetverbalscore.offsetWidth / 2);
    targetverbalscore.style.right = verbalright1 + 'px';
    let totaldifference = document.getElementById("totaldifference");
    totaldifference.innerHTML = '+' + (targetTotal - currentTotal);
    let quantdifference = document.getElementById("quantdifference");
    quantdifference.innerHTML = '+' + (targetQuant - currentQuant);
    let verbaldifference = document.getElementById("verbaldifference");
    verbaldifference.innerHTML = '+' + (targetVerbal - currentVerbal);
    let totalscoretitle = document.getElementById("totalscoretitle");
    totalscoretitle.innerHTML = '' + currentTotal;
    let quantscoretitle = document.getElementById("quantscoretitle");
    quantscoretitle.innerHTML = 'Q' + currentQuant;
    let verbalscoretitle = document.getElementById("verbalscoretitle");
    verbalscoretitle.innerHTML = 'V' + currentVerbal;
    let totalscoredesc = document.getElementById("totaldesc");
    let targetotalpoint = document.getElementById("targetotalpoint");
    let quantscoredesc = document.getElementById("quantdesc");
    let targetquantpoint = document.getElementById("targetquantpoint");
    let verbalscoredesc = document.getElementById("verbaldesc");
    let targetverbalpoint = document.getElementById("targetverbalpoint");
    if (currentTotal >= targetTotal) {
      totaldifference.style.display = "none";
    }
    else {
      totaldifference.style.display = "inline";
    }
    if (currentQuant >= targetQuant) {
      quantdifference.style.display = "none";
    }
    else {
      quantdifference.style.display = "inline";
    }
    if (currentVerbal >= targetVerbal) {
      verbaldifference.style.display = "none";
    }
    else {
      verbaldifference.style.display = "inline";
    }
    if (currentTotal > targetTotal) {
      targetotalscore.style.display = "inline";
      totalscoredesc.innerHTML = "Your estimated GMAT score per your performance in this mock test is " + currentTotal + ", which is <span>" + (currentTotal - targetTotal) + " points</span>" + " higher than your target GMAT score of " + targetTotal + ".";
      if ((currentotalbar.offsetWidth - targetotalbar.offsetWidth) < targetotalscore.offsetWidth) {
        targetotalpoint.classList.add('arrowdown');
        targetotalscore.classList.add('scoredown');
      }
      else {
        targetotalpoint.classList.remove('arrowdown');
        targetotalscore.classList.remove('scoredown');
      }
    }
    else if (currentTotal == targetTotal) {
      totalscoredesc.innerHTML = "Your estimated GMAT score per your performance in this mock test is " + currentTotal + ", which is equal to your target GMAT score.";
      targetotalpoint.classList.add('arrowdown');
      targetotalscore.style.display = "none";
    }
    else {
      totalscoredesc.innerHTML = "Your estimated GMAT score per your performance in this mock test is " + currentTotal + ", which is <span>" + (targetTotal - currentTotal) + " points</span>" + " lower than your target GMAT score of " + targetTotal + ".";
      targetotalscore.style.display = "inline";
      if ((targetotalbar.offsetWidth - currentotalbar.offsetWidth) < totaldifference.offsetWidth) {
        totaldifference.style.left = targetotalbar.offsetWidth + "px";
        targetotalpoint.classList.add('arrowdown');
        targetotalscore.classList.add('scoredown');
      }
      else {
        let left = angularMath.nearOfNumber(currentotalbar.offsetWidth + ((targetotalbar.offsetWidth - currentotalbar.offsetWidth) / 2) - (totaldifference.offsetWidth / 2) -2);
        totaldifference.style.left = left + "px";
        targetotalpoint.classList.remove('arrowdown');
        targetotalscore.classList.remove('scoredown');
      }
    }

    if (currentQuant > targetQuant) {
      targetquantscore.style.display = "inline";
      if (currentQuant - targetQuant == 1) {
        quantscoredesc.innerHTML = "Your estimated quantitative score per your performance in this mock test is Q" + currentQuant + ", which is <span>" + (currentQuant - targetQuant) + " point</span>" + " higher than your target quantitative score of Q" + targetQuant + ".";
      }
      else {
        quantscoredesc.innerHTML = "Your estimated quantitative score per your performance in this mock test is Q" + currentQuant + ", which is <span>" + (currentQuant - targetQuant) + " points</span>" + " higher than your target quantitative score of Q" + targetQuant + ".";
      }
      if ((currentquantbar.offsetWidth - targetquantbar.offsetWidth) < targetquantscore.offsetWidth) {
        targetquantpoint.classList.add('arrowdown');
        targetquantscore.classList.add('scoredown');
      }
      else {
        targetquantpoint.classList.remove('arrowdown');
        targetquantscore.classList.remove('scoredown');
      }
    }
    else if (currentQuant == targetQuant) {
      quantscoredesc.innerHTML = "Your estimated quantitative score per your performance in this mock test is Q" + currentQuant + ", which is equal to your target quantitative score.";
      targetquantpoint.classList.add('arrowdown');
      targetquantscore.style.display = "none";
    }
    else {
      if (targetQuant - currentQuant == 1) {
        quantscoredesc.innerHTML = "Your estimated quantitative score per your performance in this mock test is Q" + currentQuant + ", which is <span>" + (targetQuant - currentQuant) + " point</span>" + " lower than your target quantitative score of Q" + targetQuant + ".";
      }
      else {
        quantscoredesc.innerHTML = "Your estimated quantitative score per your performance in this mock test is Q" + currentQuant + ", which is <span>" + (targetQuant - currentQuant) + " points</span>" + " lower than your target quantitative score of Q" + targetQuant + ".";
      }
      targetquantscore.style.display = "inline";
      if ((targetquantbar.offsetWidth - currentquantbar.offsetWidth) < quantdifference.offsetWidth) {
        quantdifference.style.left = targetquantbar.offsetWidth + "px";
        targetquantpoint.classList.add('arrowdown');
        targetquantscore.classList.add('scoredown');
      }
      else {
        let quantleft = angularMath.nearOfNumber(currentquantbar.offsetWidth + ((targetquantbar.offsetWidth - currentquantbar.offsetWidth) / 2) - (quantdifference.offsetWidth / 2) -2 );
        quantdifference.style.left = quantleft + "px";
        targetquantpoint.classList.remove('arrowdown');
        targetquantscore.classList.remove('scoredown');
      }
    }

    if (currentVerbal > targetVerbal) {
      targetverbalscore.style.display = "inline";
      if (currentVerbal - targetVerbal == 1) {
        verbalscoredesc.innerHTML = "Your estimated verbal score per your performance in this mock test is V" + currentVerbal + ", which is <span>" + (currentVerbal - targetVerbal) + " point</span>" + " higher than your target verbal score of V" + targetVerbal + ".";
      }
      else {
        verbalscoredesc.innerHTML = "Your estimated verbal score per your performance in this mock test is V" + currentVerbal + ", which is <span>" + (currentVerbal - targetVerbal) + " points</span>" + " higher than your target verbal score of V" + targetVerbal + ".";
      }
      if ((currentverbalbar.offsetWidth - targetverbalbar.offsetWidth) < targetverbalscore.offsetWidth) {
        targetverbalpoint.classList.add('arrowdown');
        targetverbalscore.classList.add('scoredown');
      }
      else {
        targetverbalpoint.classList.remove('arrowdown');
        targetverbalscore.classList.remove('scoredown');
      }
    }
    else if (currentVerbal == targetVerbal) {
      verbalscoredesc.innerHTML = "Your estimated verbal score per your performance in this mock test is V" + currentVerbal + ", which is equal to your target verbal score.";
      targetverbalpoint.classList.add('arrowdown');
      targetverbalscore.style.display = "none";
    }
    else {
      if (targetVerbal - currentVerbal == 1) {
        verbalscoredesc.innerHTML = "Your estimated verbal score per your performance in this mock test is V" + currentVerbal + ", which is <span>" + (targetVerbal - currentVerbal) + " point</span>" + " lower than your target verbal score of V" + targetVerbal + ".";
      }
      else {
        verbalscoredesc.innerHTML = "Your estimated verbal score per your performance in this mock test is V" + currentVerbal + ", which is <span>" + (targetVerbal - currentVerbal) + " points</span>" + " lower than your target verbal score of V" + targetVerbal + ".";
      }
      targetverbalscore.style.display = "inline";
      if ((targetverbalbar.offsetWidth - currentverbalbar.offsetWidth) < verbaldifference.offsetWidth) {
        verbaldifference.style.left = targetverbalbar.offsetWidth + "px";
        targetverbalpoint.classList.add('arrowdown');
        targetverbalscore.classList.add('scoredown');
      }
      else {
        let verbaleft = angularMath.nearOfNumber(currentverbalbar.offsetWidth + ((targetverbalbar.offsetWidth - currentverbalbar.offsetWidth) / 2) - (verbaldifference.offsetWidth / 2) - 2);
        verbaldifference.style.left = verbaleft + "px";
        targetverbalpoint.classList.remove('arrowdown');
        targetverbalscore.classList.remove('scoredown');
      }
    }

    let results = document.getElementById("resultswrap");
    results.style.visibility = "visible";
  }
}
